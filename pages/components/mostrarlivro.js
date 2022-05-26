import api from '../api/api'
import Livro from './cadastrarlivro'
import {useEffect, useState} from 'react'

export default function MostrarLivro(){
  const [livros, setLivros] = useState([])

	useEffect(() => {
		api
			.get('/livros')
			.then(response => {
				setLivros(response.data)
			})
			.catch(err => {
				console.log('Erro: ', err)
			})
	}, [])
  return(
    	<>
			{
				livros.map(livro => {
					return (
            <>
							< Livro key={livro.id} titulo={livro.titulo} editora={livro.editora} datapublicacao={livro.data_publicacao} />
            </>
					)
				})
			}
		</>
  )
}