import Link from 'next/link'

export default function Home() {
  return (
<div class = "color">
<h1><center>Login</center></h1>
<p> <center>
  Nome <input type="text" name="Nome" size="40" /> 
</center></p>
<p> <center>
  Senha <input type="text" name="Nome" size="40" /> 
</center> </p>
<center> <h3 className="title">        
<Link href="/">Voltar ao menu</Link>             
</h3>
</center>

  </div>
    
  )};