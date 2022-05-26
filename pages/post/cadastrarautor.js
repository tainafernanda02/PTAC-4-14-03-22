import styles from '/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


export default function Home() {
  const [autores, setAutores] = useState({
    nome: "",
    sobrenome: "",
    data_nascimento: ""
  });
  let router = useRouter();
  
const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAutores({ ...autores, [id]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
    nome: autores.nome,
    sobrenome: autores.sobrenome, 
    data_nascimento: autores.data_nascimento
    }
    console.log(data);
    const response = await axios.post("https://skeleton-nodejs-express-ejs-1.tainasouza.repl.co/inserir", data)
     if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/post/mostrarautores')
    }
    console.log(response)

  }
  
  return (
<div class = "titulo1">
    <h3>✏️ Página de Cadastro dos Autores ✏️</h3> 
  <div class = "color">
    <ToastContainer/>
  <form onSubmit={handleSubmit}>
  <h4>Nome <input id="nome" type="text" value={autores.nome} onChange={handleInputChange}/></h4>
  <h4>Sobrenome <input id="sobrenome" type="text" value={autores.sobrenome} onChange={handleInputChange}/></h4>
    <h4>Data de Nascimento</h4>
    <input id="data_nascimento" type="date" value={autores.data_nascimento} onChange={handleInputChange}/>
    <button type="submit">Cadastrar</button>
    <center> <p><Link href="/">Voltar ao menu</Link></p></center>            
  </form>
  </div>
</div>

  )};