import styles from '/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


export default function Home() {
  const [livros, setLivros] = useState({
    titulo: "",
    editora: "",
    data_publicacao: "",
    preco: "",
     autor_id:""
  });
  let router = useRouter();
  
const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLivros({ ...livros, [id]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
    
    titulo: livros.titulo,
    editora: livros.editora, 
    data_publicacao: livros.data_publicacao,
    preco: livros.preco,
    autor_id: livros.autor_id
    }
    console.log(data);
    const response = await axios.post("https://skeleton-nodejs-express-ejs-1.tainasouza.repl.co/inserirlivro", data)
     if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/post/mostrarlivros')
    }
    console.log(response)

  }
  
  return (
<div class = "titulo1">
<h3>📖 Página de Cadastro dos Livros 📖</h3>
  <div class = "color">
   <center>
    <ToastContainer/>
  <form onSubmit={handleSubmit}>
  <h4>ID do Autor <input id="autor_id" type="text" value={livros.autor_id} onChange={handleInputChange}/></h4>
  <h4>Titulo <input id="titulo" type="text" value={livros.titulo} onChange={handleInputChange}/> </h4>
    <h4>Editora    <input id="editora" type="text" value={livros.editora} onChange={handleInputChange}/></h4>
    <h4>Data de Publicação <input id="data_publicacao" type="date" value={livros.data_publicacao} onChange={handleInputChange}/></h4>
    <h4>Preço<input id="preco" type="text" value={livros.preco} onChange={handleInputChange} /></h4>
    <button type="submit">Cadastrar</button>
    <center> <p><Link href="/">Voltar ao menu</Link></p></center>
  </form>
     </center>
  </div>
</div>
    
  )};