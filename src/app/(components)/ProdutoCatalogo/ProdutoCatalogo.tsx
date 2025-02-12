import Image from "next/image";
import { IProduto } from "../../../../interfaces/IProduto";
import style from './ProdutoCatalogo.module.scss'

export interface ProdutoCadastro extends IProduto {
    id: number
    created_at: Date
}

export default function ProdutoCatalogo({produto}: {produto: ProdutoCadastro}) {

    return (
        <div className={style.produto} key={produto.id}>
            <h2>{produto.nome.toUpperCase()}</h2>
            <h4>{produto.codigo}</h4>
            <h4>00{produto.tabela_1.replaceAll(',', '')}00</h4>
            <h3>R$ {produto.tabela_3}</h3>
            <Image 
                src={produto.image_url} 
                width={250}
                height={250}
                alt={`imagem do produto ${produto.nome}`} 
            />
        </div>
    )

}