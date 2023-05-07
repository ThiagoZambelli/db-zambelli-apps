import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import eu from 'assets/img/eu.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={eu} alt="Imagem do mini EU" />
            <p>
                &copy; Todos os direitos Reservados - Criador: <Link to='https://www.linkedin.com/in/thiagozambelli'>Thiago Zambelli</Link>
            </p>

        </footer>
    )
}

export default Footer