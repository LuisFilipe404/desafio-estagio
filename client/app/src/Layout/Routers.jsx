import styles from './Routers.module.css';
import { Link } from 'react-router-dom'

function Routers ({ img, router}) {
    return (
        <section className={styles.container}> 
            <Link to={router}>
                <img src={img} alt="List Icon" />
            </Link>
        </section>
    )
}

export default Routers