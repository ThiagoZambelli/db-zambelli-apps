import CardFlip from 'componentes/CardFlip'
import React from 'react'
import lithtleZ from 'assets/logoLithtleZ.svg';
import styles from './TestesCSS.module.scss';

export default function TestesCSS() {
  return (
    <section className={styles.testesCSS}>
      <h2>TestesCSS</h2>
      <CardFlip
        imagem={lithtleZ}
        titulo='Titulo de TesteFlip'
        texto='Texto de teste de card flip'
      />
    </section>
  )
}
