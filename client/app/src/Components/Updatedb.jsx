import icon from '../assets/right-icon.jpg' // Importação do icone
import styles from './Submit.module.css' // Importação do Css


function UpdateDb () {
    
    // Função para trocar para a main page
    const changeMainPage = () => {
        window.location.href="http://localhost:5173/"
    }

    return (
        <main className={styles.container}>
            <div>
                <h2>Automóvel Editado</h2>
                <img src={icon} alt="Sucesso" />
                <button onClick={changeMainPage}>Voltar para página inicial</button>
            </div>
        </main>
    )
}

export default UpdateDb;