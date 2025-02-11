'use server'

import { revalidatePath } from "next/cache";
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { createClient } from "../../../utils/supabase/server"
import { IProduto } from "../../../interfaces/IProduto";
import { fromEnv } from "@aws-sdk/credential-providers";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: fromEnv(),
})

async function uploadImage(image: File): Promise<string | null> {

    const buffer =  Buffer.from(await image.arrayBuffer())

    const params = {
        Bucket: process.env.AWS_S3_BUCKET!,
        Key: `uploads/${image.name}`,
        Body: buffer,
        ContentType: image.type,
    }

    try {

        await s3.send(
            new PutObjectCommand(params)
        )

        const url = `${process.env.AWS_CLOUDFRONT_URL}/uploads/${image.name}`
        console.log(url);
        return url

    } catch(error) {
        console.error(error)
        return null
    }

}

export default async function createProduto(formData: FormData) {

    const supabase = await createClient()

    const data = {
        nome: formData.get('nome') as string,
        codigo: formData.get('codigo') as string,
        tabela1: formData.get('tabela1') as string,
        tabela3: formData.get('tabela3') as string,
        fornecedor: formData.get('fornecedor') as string,
        categoria: formData.get('categoria') as string,
        imagem: formData.get('imagem') as File,
    }
    // const data = Object.fromEntries(formData)

    const imageUrl = await uploadImage(data.imagem)
    console.log(imageUrl);

    if (!imageUrl) return

    const produtoCadastro: IProduto = {
        nome: data.nome,
        codigo: data.codigo,
        tabela_1: data.tabela1,
        tabela_3: data.tabela3,
        fornecedor_id: parseInt(data.fornecedor),
        categoria_id: parseInt(data.categoria),
        firma_id: 1,
        image_url: imageUrl,
        ativo: true
    }

    console.log(produtoCadastro);

    const { data: produto, error } = await supabase
        .from('produtos')
        .insert([produtoCadastro])
        .select()

    if (error) console.error(error)

    console.log(produto);
    console.log(data);

    revalidatePath('/novo')

}