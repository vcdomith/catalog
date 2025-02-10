'use server'

import { createClient } from "../../../utils/supabase/server"

export default async function createProduto(formData: FormData) {

    const supabase = await createClient()

    const data = {
        nome: formData.get('nome') as string,
        codigo: formData.get('codigo') as string,
        descricao: formData.get('descricao') as string,
        tabela1: formData.get('tabela1') as string,
        tabela2: formData.get('tabela2') as string,
        imagem: formData.get('imagem'),
    }

    


}