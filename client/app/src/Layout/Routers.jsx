// Componente para gerar os links de redirecionamento da MainPage

import styles from './Routers.module.css'; // Importação do Css
import { Link } from 'react-router-dom' // Importação dos links do Router

function Routers ({ img, router}) {
    return (
        <div className={styles.container}> 
            <Link to={router}>
                <img src={img} alt="List Icon" />
            </Link>
        </div>
    )
}

export default Routers