import styles from './ListaConteudo.module.scss';
import {GoArrowRight} from 'react-icons/go'

const ListaConteudo = ({lista}) =>{
    
    return (
        <ul className={styles.lista}>
            {lista.map(item => (<li key={item.id}>
                <h4><GoArrowRight />{item.titulo}</h4>
                <p>{item.descricao}</p>
            </li>))}
        </ul>
    )
}

export default ListaConteudo