import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div class= "titulo">
 <h1> ❤ ❤ ❤ ❤ Livraria ❤ ❤ ❤ ❤</h1>
  
  <div class= "color">
    <center>
<ul>
  <h3 className="title">        
         <Link href="/post/cadastro">❤ Cadastro ❤</Link>       
         </h3>
       
         
 
 
        <h3 className="title">        
         <Link href="/post/login">❤ Login ❤</Link>       
         </h3>
       

  
        <h3 className="title">        
         <Link href="/post/senha">❤ Trocar a Senha ❤</Link>       
         </h3>
     
        <h3 className="title">        
         <Link href="/post/cadastrarautor">❤ Cadastrar Autor ❤</Link>       
         </h3>
 
        <h3 className="title">        
         <Link href="/post/cadastrarlivro">❤ Cadastrar Livro ❤</Link>       
         </h3>
    
          <h3 className="title">        
         <Link href="/post/mostrarautores">❤ Mostrar Autores ❤</Link>       
         </h3>
     

  
        <h3 className="title">        
         <Link href="/post/mostrarlivros">❤ Mostrar Livros ❤</Link>       
         </h3>
    
  </ul>
</center>
  </div>
    </div>
  )
  
}