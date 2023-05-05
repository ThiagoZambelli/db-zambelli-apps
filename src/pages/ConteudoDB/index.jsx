import ListaConteudo from "componentes/ListaConteudo";
import { usePaginaAtual } from "state/hooks/usePaginaAtual"
import styles from './ConteudoDB.module.scss';

const ConteudoDB = () => {
    const conteudo = usePaginaAtual();
    const temLista = conteudo.topicos ? true : false; 
    
    return (
        <section className={styles.conteudoDB}>
            <h2>{conteudo.titulo}</h2>
            <h3>{conteudo.assunto}</h3>
            {temLista && <ListaConteudo lista={conteudo.topicos} />}
        </section>
    )
}

export default ConteudoDB