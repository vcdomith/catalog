import { PostgrestError } from "@supabase/supabase-js";
import { IProduto } from "../../interfaces/IProduto";
import { createClient } from "../../utils/supabase/client";
import styles from "./page.module.css";
import Image from "next/image";
import ProdutoCatalogo, { ProdutoCadastro } from "./(components)/ProdutoCatalogo/ProdutoCatalogo";

export default async function Home() {

    const supabase = createClient()

    const {data: produtos, error} = await supabase
        .from('produtos') 
        .select('*')

    return (
        <div className={styles.page}>
            <main className={styles.main}>

                {produtos&&produtos.map( (produto: ProdutoCadastro) =>
                    <ProdutoCatalogo key={produto.id} produto={produto} />
                )}

            </main>
        </div>
    );
}
