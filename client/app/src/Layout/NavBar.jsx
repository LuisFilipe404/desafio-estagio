import { Link } from 'react-router-dom' // Importar os links

// Importar Css //

import styles from './NavBar.module.css'
import './MenuResponsivo.css'


function NavBar () {

    // Função para animar a gaveta de links //

    var isClose = false

    function changeMenu () {
        const menu = document.getElementById('menu')
        const hideMenu = document.getElementById('nav')

        isClose = !isClose

        if (isClose === true) {
            menu.classList.add('animationIn')
            menu.classList.remove('animationOut')
            hideMenu.classList.remove('hideContainer')

        } else {
            menu.classList.remove('animationIn')
            menu.classList.add('animationOut')
            hideMenu.classList.add('hideContainer')
        }
    
    }
    
    return (
        <header className={styles.headerContainer}>
            <div className={styles.container}>
                <h1><Link to='/'>Locadora de Automóvel</Link></h1>
                <nav>
                    <ul className='hideContainer' id='nav'>
                        <li>
                            <Link to='views'>Todos os Automóveis</Link>
                        </li>
                        <li>
                            <Link to='/createnew'>Criar um Novo Automóvel</Link>
                        </li>
                    </ul>
                </nav>
                
                <div onClick={changeMenu} className='container' id='menu'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </div>

        </header>
    )
}

export default NavBar