import Head from 'next/head'
import Link from 'next/link'
import MFostrarLivro from '../components/mostrarlivro'

export default function MostrarLivros(){
  return(
    <div class = "titulo1">
    <Head>
    <title>📖 Página dos Livros 📖</title>
    </Head>
    <div class = "color">
    <MFostrarLivro/>
    </div>
    <footer>
   <Link href="/">Voltar ao menu</Link>            
    </footer>
    </div>
  )
}