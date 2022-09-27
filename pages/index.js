import Link from "next/link"
import { useState } from "react"

export default function Home(){
    return(
        <div>
            <h1>Home</h1>
            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
        </div>
    )
}