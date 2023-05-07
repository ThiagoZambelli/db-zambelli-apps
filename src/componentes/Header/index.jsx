import lithtleZ from 'assets/logoLithtleZ.svg';
import styles from './Header.module.scss';
import NavLink from 'componentes/NavLink';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const trocarDePagina = useNavigate();

    const irAoInicio = () => {
        trocarDePagina('/')
    }

    return (
        <header className={styles.header}>
            <h1 onClick={irAoInicio}><img src={lithtleZ} alt="Logo da LithtleZ" /></h1>
            <NavLink />
        </header>
    )
}

export default Header