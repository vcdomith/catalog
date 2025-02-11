import { PostgrestError } from "@supabase/supabase-js";
import { IProduto } from "../../interfaces/IProduto";
import { createClient } from "../../utils/supabase/client";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {

    const supabase = createClient()

    const {data: produtos, error} = await supabase
        .from('produtos') 
        .select('*')

    return (
        <div className={styles.page}>
            <main className={styles.main}>

                {produtos&&produtos.map( (produto: IProduto) =>
                    <div key={produto.id}>
                        <h2>{produto.nome}</h2>
                        <Image 
                            src={produto.image_url} 
                            width={100}
                            height={100}
                            alt={`imagem do produto ${produto.nome}`} 
                        />
                        <h3>{produto.tabela_1}</h3>
                    </div>
                )}

            </main>
        </div>
    );
}
