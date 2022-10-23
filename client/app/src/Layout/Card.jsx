// Layout para chamar todos os dados do banco

import styles from './Card.module.css'; // Importação do Css

import on from '../assets/avaible-icon.png' // Importação do Icon de disponivel
import off from '../assets/error.png' // Importação do Icon de indisponivel

function Card({ disponibilidade, modelo, marca, id, tipo}) {

    /*
        Sistema para trocar os dados de:
            D para dispnivel e atribuir seu icone
            I para indisponivel e atribuir seu icone
    */

    let disp = disponibilidade
    let img = null

    if (disp === 'D') {
        disp = 'Disponível'
        img = on
    } else {
        disp = 'Indisponível'
        img  = off
        
    }

    return (
        <div className={styles.container}>
            <h1>Modelo: {modelo} #{id}</h1>
            <p>Marca: {marca}</p>
            <p>Tipo: {tipo}</p>
            <p className={styles.disp}>Disponibilidade: {disp} <img className={styles.img} src={img} alt={disp} /></p>
        </div>
    )
}

export default Card