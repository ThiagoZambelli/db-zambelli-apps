import styles from './Inicio.module.scss';
import eu from 'assets/img/eu.png';

const Inicio = () => {
    return (
        <section className={styles.inicio}>
            <h2>Bem-Vindo ao banco de dados da LithtleZ</h2>
            <img src={eu} alt="Imagem do MiniEu" />
        </section>
    )
}

export default Inicio