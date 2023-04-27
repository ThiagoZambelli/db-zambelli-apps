import CardFlip from 'componentes/CardFlip'
import React from 'react'
import lithtleZ from 'assets/logoLithtleZ.svg';

export default function TestesCSS() {
  return (
    <>
    <div>TestesCSS</div>
    <CardFlip
      imagem={lithtleZ}
      titulo='Titulo de TesteFlip'
      texto='Texto de teste de card flip'
    />
    </>
  )
}
