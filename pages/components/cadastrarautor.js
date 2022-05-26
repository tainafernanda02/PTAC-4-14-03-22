import Link from 'next/link'
import styles from '/styles/Home.module.css'
import axios from 'axios'


export default function Autor(props) {
  return (

         <fieldset class="cards">
            <h2>{props.nome} {props.sobrenome}</h2>
            <div>Data de Nascimento: {props.datan}</div>

         </fieldset>

  )
}