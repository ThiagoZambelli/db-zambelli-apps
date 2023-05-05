import { useState } from 'react';
import styles from './CardDB.module.scss';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


const CardDB = ({ titulo, assunto, id }) => {
    const [aberto, setAberto] = useState(false);
    const navegar = useNavigate();

    const abrir = () => {
        setAberto(!aberto)
    }

    const abrirAssunto = () => {
        navegar(`/db/conteudo/${id}`)
    }

    return (
        <div className={styles.cardDB}>
            <div className={styles.cardDB__titulo}>
                <h2>
                    {titulo}
                </h2>
                {!aberto ? <IoIosArrowDown onClick={abrir} size={'32px'} /> : <IoIosArrowUp onClick={abrir} size={'32px'} />}
            </div>
            {aberto &&
                <div className={styles.cardDB__assunto}>
                    <p>{assunto}</p>
                    <button
                        onClick={abrirAssunto}
                    >Ler mais ...</button>
                </div>
            }

        </div>
    )
}

export default CardDB