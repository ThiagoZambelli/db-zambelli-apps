import { Link } from "react-router-dom"
import styles from './NavLinkDB.module.scss';

const NavLinkDB = () => {
    return (
        <nav className={styles.nav}>
            <Link className={styles.nav__link} to='/db' >Banco de Dados da LithtleZ</Link>
        </nav>
    )
}

export default NavLinkDB