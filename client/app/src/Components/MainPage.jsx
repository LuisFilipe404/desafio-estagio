import listIcon from '../assets/check-list.png' //importação do ícone de lista
import createIcon from '../assets/create.png' //importação do ícone de criação
import editIcon from '../assets/edit.png' //importação do icone de edicao
import styles from './MainPage.module.css'; // Importação do Css
import Routers from '../Layout/Routers' // Importação de layout (Cards dos Links)

function MainPage () {
    return (
        <main className={styles.container}>
            <section>
                <Routers img={listIcon} router='/views'/>
                <div className={styles.info}>
                    <h2>Todos os Automóveis</h2>
                    <p>Liste todos os automóveis disponíveis, além de poder editá-los e excluí-los.</p>
                </div>
            </section>
            <section>
                <Routers img={createIcon} router='/createnew'/>
                <div className={styles.info}>
                    <h2>Adicionar um novo automóvel</h2>
                    <p>Adicione um novo automóvel, editando-o da maneira que preferir!</p>
                </div>
            </section>
            <section>
                <Routers img={editIcon} router='/edit'/>
                <div className={styles.info}>
                    <h2>Editar um automóvel</h2>
                    <p>Edite ou Delete um registro de automóvel!</p>
                </div>
            </section>
        </main>
    )
}

export default MainPage