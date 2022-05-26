import Link from 'next/link'
import styles from '/styles/Home.module.css'
import axios from 'axios'

export default function Livro(props) {
  return (
          <div className={styles.card}>
            <h2>{props.titulo}</h2>
            <div>{props.autor}</div>
            <div>{props.editora}</div>
            <div>{props.datapublicacao}</div>
          </div>
  )
}