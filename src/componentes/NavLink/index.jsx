import { Link, useLocation } from "react-router-dom"
import styles from './NavLink.module.scss';

const NavLink = () => {
    const localizacao = useLocation().pathname;



    return (
        <nav className={styles.nav}>
            <Link
                className={`
                    ${styles.nav__link} 
                    ${localizacao === '/db' ? styles.nav__linkAtivo : ''}`}
                to='/db'
            >Banco de Dados da LithtleZ</Link>
            <Link
                className={`
                    ${styles.nav__link} 
                    ${localizacao === '/css' ? styles.nav__linkAtivo : ''}`}
                to='/css'
            >Testes CSS</Link>
        </nav>
    )
}

export default NavLink