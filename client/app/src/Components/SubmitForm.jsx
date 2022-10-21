import icon from '../assets/right-icon.jpg'
import styles from './SubmitForm.module.css'

function SubmitForm () {

    const changeMainPage = () => {
        window.location.href="http://localhost:5173/"
    }

    return (
        <div className={styles.container}>
            <div>
                <h2>Automóvel Cadastrado</h2>
                <img src={icon} alt="Sucesso" />
                <button onClick={changeMainPage}>Voltar para página inicial</button>
            </div>
        </div>
    )
} 

export default SubmitForm