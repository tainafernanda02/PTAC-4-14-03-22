import Link from 'next/link'
import styles from '/styles/Home.module.css'

export default function Home() {
  return (
<div className={styles.main} class="color">

  <h1> <center>Cadastro </center></h1>

<center>  Nome <input type="text" name="Nome" size="40" /> </center>
<p>
  <center> E-mail<input type="text" name="Nome" size="40" /> </center>
</p>
<p>
  <center>Senha <input type="text" name="Nome" size="40" /> </center>
</p>
<p>
 <center> Confirme a Senha<input type="text" name="Nome" size="40" /></center>
</p>
<center><h3 className="title">        
<Link href="/">Voltar ao menu</Link>             
</h3>
</center>
<ul>

  </ul>
  </div>
    
  )};