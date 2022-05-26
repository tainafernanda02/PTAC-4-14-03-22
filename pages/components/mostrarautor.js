import api from '../api/api'
import Autor from './cadastrarautor'
import {useEffect, useState} from 'react'

export default function MFostrarAutor(){
  const [autores, setAutores] = useState([])

	useEffect(() => {
		api
			.get('/')
			.then(response => {
				setAutores(response.data)
			})
			.catch(err => {
				console.log('Erro: ', err)
			})
	}, [])
  return(
    	<>
			{
				autores.map(autor => {
					return (
            <>
							< Autor key={autor.id} nome={autor.nome} sobrenome={autor.sobrenome} datan={autor.data_nascimento} />
            </>
					)
				})
			}
		</>
  )
}