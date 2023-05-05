import CardDB from 'componentes/CardDB';
import styles from './InicioDB.module.scss';
import assuntos from 'assets/db/dbProjeto.json';

const InicioDB = () => {

    
    return (
        <section className={styles.inicioDB}>
            {assuntos.map(assunto => ( <CardDB 
                                            key={assunto.titulo} 
                                            {...assunto}
                                        />))}
        </section>
    )

}

export default InicioDB