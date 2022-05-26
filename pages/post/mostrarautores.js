import Head from 'next/head'
import Link from 'next/link'
import MostrarAutor from '../components/mostrarautor'

export default function MostrarAutores(){
  return(
  <div class = "titulo1">
    <Head>
    <title>✏️ Página dos Autores ✏️</title>
    </Head>
    <div class = "color">
    <MostrarAutor/>
    </div>
    <footer>
    <Link href="/">Voltar ao menu</Link>            
    </footer>
    </div>
  )
}