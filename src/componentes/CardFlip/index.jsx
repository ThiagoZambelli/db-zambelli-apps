import React from 'react';
import styles from './CardFlip.module.scss';import CardFlipX from './CardFlipX';
import CardFlipY from './CardFlipY';
;

export default function CardFlip({ imagem, titulo, texto }) {
    return (
        <section className={styles.cardFlip}>
            <h3 className={styles.titulo} >Teste de Flip</h3>
            <div className={styles.cardFlip__container} >
                <CardFlipX imagem={imagem} titulo={titulo} texto={texto} />
                <CardFlipY imagem={imagem} titulo={titulo} texto={texto} />
            </div>
        </section>

    )
}
