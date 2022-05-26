import Link from 'next/link'

export default function Home() {
  return (
<div class = "color">
<center> <h1>Trocar Senha</h1> </center>
<p> <center>
  Nova Senha <input type="text" name="Nome" size="40" /> </center> </p>
<p> <center>
  Confirmar a Senha <input type="text" name="Nome" size="40" /> </center> </p>
  <h3 className="title">        
<center><Link href="/">Voltar ao menu</Link> </center>           
</h3>

  </div>
    
  )};