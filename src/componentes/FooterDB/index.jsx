import { Link } from 'react-router-dom';
import styles from './FooterDB.module.scss';
import eu from 'assets/img/eu.png';

const FooterDB = () => {
    return (
        <footer className={styles.footer}>
            <img src={eu} alt="Imagem do mini EU" />
            <p>
                &copy; Todos os direitos Reservados - Criador: <Link to='https://www.linkedin.com/in/thiagozambelli'>Thiago Zambelli</Link>
            </p>

        </footer>
    )
}

export default FooterDB