import Select from 'react-select';
import style from './novo.module.scss';
import { createClient } from '../../../utils/supabase/client';
import NovoProduto from './NovoProduto';

export default async function Novo() {
    
    const supabase = createClient()

    const {data: categorias, error: catError} = await supabase
        .from('categorias')
        .select('*')

    if (catError) return <>Erro ocorreu {catError}</>

    const {data: fornecedores, error: fornError} = await supabase
        .from('fornecedores')
        .select('*')

    if (fornError) return <>Erro ocorreu {fornError}</>

    console.log(categorias, fornecedores);

    return (
        <div className={style.page}>

            <header className={style.header}>
                <h3>catalog.<em>lad</em></h3>
            </header>

            <main className={style.main}>
                <NovoProduto 
                    fornecedores={fornecedores} 
                    categorias={categorias} 
                    style={style} 
                />
                {/* <form action="" className={style.form}>

                    <label htmlFor="nome">nome:</label>
                    <input type="text" id="nome" name="nome" required />

                    <label htmlFor="codigo">codigo:</label>
                    <input type="text" id="codigo" name="codigo" required />

                    <label htmlFor="descricao">descricao:</label>
                    <input type="text" id="descricao" name="descricao" required />

                    <label htmlFor="tabela1">tabela1:</label>
                    <input type="text" id="tabela1" name="tabela1" required />

                    <label htmlFor="tabela2">tabela2:</label>
                    <input type="text" id="tabela2" name="tabela2" required />

                    <Select 
                        defaultValue={fornecedores? fornecedores[0] : ''} 
                        options={fornecedores?? []}                       
                        name='fornecedor'
                    />

                    <Select 
                        defaultValue={categorias? categorias[0] : ''} 
                        options={categorias?? []}                       
                        name='fornecedor'
                    />

                    <label htmlFor="imagem">imagem:</label>
                    <input type="file" name="imagem" id="imagem" accept='image/*' capture/>

                </form> */}
            </main>
        </div>
    )

}