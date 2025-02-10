import style from './novo.module.scss';

export default function Novo() {
    
    return (
        <div className={style.page}>

            <header className={style.header}>
                <h3>catalog.<em>lad</em></h3>
            </header>

            <main className={style.main}>
                <form action="" className={style.form}>

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

                    <label htmlFor="imagem">imagem:</label>
                    <input type="file" name="imagem" id="imagem" accept='image/*' capture/>

                </form>
            </main>
        </div>
    )

}