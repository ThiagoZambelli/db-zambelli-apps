import lithtleZ from 'assets/logoLithtleZ.svg';
import NavLinkDB from 'componentes/NavLinkDB';
import styles from './HeaderDB.module.scss';

const HeaderDB = () => {
    return (
        <header className={styles.header}>
            <h1><img src={lithtleZ} alt="Logo da LithtleZ" /></h1>
            <NavLinkDB />
        </header>
    )
}

export default HeaderDB