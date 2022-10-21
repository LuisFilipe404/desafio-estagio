import listIcon from '../assets/check-list.png' //importação do ícone de lista
import createIcon from '../assets/create.png' //importação do ícone de criação
import styles from './MainPage.module.css'; // Importação do Css
import Routers from '../Layout/Routers' // Importação de layout

function MainPage () {
    return (
        <div className={styles.container}>
            <div>
                <Routers img={listIcon}/>
                <div>
                    <h2>Todos os Automóveis</h2>
                    <p>Liste todos os automóveis disponíveis, além de poder editá-los e excluí-los.</p>
                </div>
            </div>
            <div>
                <Routers img={createIcon} router='/createnew'/>
                <div>
                    <h2>Adicionar um novo automóvel</h2>
                    <p>Adicione um novo automóvel, editando-o da maneira que preferir!</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage