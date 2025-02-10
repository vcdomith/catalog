'use client'
import Link from "next/link";
import Logo from "../svgs/Logo";
import style from './nav.module.scss'

export default function Nav() {

    return (
        <nav className={style.nav}>
            <Link 
                href={'/'}
                prefetch
            >
                Catalogo
            </Link>
            <Link 
                href={'/novo'}
                prefetch
            >
                Novo Produto
            </Link>
            <span className={style.logo}>
                <Logo />
                {/* <h3>catalog.<em>lad</em></h3> */}
            </span>
            <div className={style.circle}></div>
        </nav>
    )

}