'use client'

import Select from "react-select"
import createProduto from "./actions"

interface NovoProdutoProps {
    fornecedores: { id: number, nome: string }[]
    categorias: { id: number, nome: string }[]
    style: { readonly [key: string]: string }
}

export default function NovoProduto({fornecedores, categorias, style}: NovoProdutoProps) {

    const fornecedoresOptions = fornecedores.map( fornecedor => ({
        value: fornecedor.id,
        label: fornecedor.nome,
    }))
    const categoriasOptions = categorias.map( categoria => ({
        value: categoria.id,
        label: categoria.nome
    }))

    // console.log(fornecedores, categorias);

    return (
        <form action={createProduto} className={style.form}>

            <label htmlFor="nome">nome:</label>
            <input type="text" id="nome" name="nome" required />

            <label htmlFor="codigo">codigo:</label>
            <input type="text" id="codigo" name="codigo" required />

            {/* <label htmlFor="descricao">descricao:</label>
            <input type="text" id="descricao" name="descricao" required /> */}

            <label htmlFor="tabela1">tabela1:</label>
            <input type="text" id="tabela1" name="tabela1" required />

            <label htmlFor="tabela3">tabela3:</label>
            <input type="text" id="tabela3" name="tabela3" required />

            <Select 
                defaultValue={null} 
                options={fornecedoresOptions!}                       
                name='fornecedor'
                required
            />

            <Select 
                defaultValue={null} 
                options={categoriasOptions!}                       
                name='categoria'
                required
            />

            <label htmlFor="imagem">imagem:</label>
            <input type="file" name="imagem" id="imagem" accept='image/*' capture required/>

            <button type="submit">Cadastrar</button>

        </form>
    )

}