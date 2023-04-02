[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=6F4A8E&width=500&height=60&lines=Bem-vindo+ao+-%3E+LithtleZ++Data-base)](https://git.io/typing-svg)

<img align="left" width="50%" style="margin-top:-20px" src="public/assets/eu.png">

</br>
</br>

<div dsplay="inline-block">


 <h2 align="justify">Feito por : Thiago Zambelli</h2>
 <h3 align="justify">Esse banco de dados tem como princípio armazenar todo o conhecimento e formas de resolução de problemas para serem usados no futuro por mim ou outros programadores!</h3>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>

&nbsp;

---

&nbsp;

# Bibliotecas React Utilizadas:


&nbsp;

---

&nbsp;

## React Icons
  > Inclui uma vasta biblioteca de Icones, de facil acesso e utilização.

  - Comando para intallação: 
   `npm install react-icons --save`

  - Importação:

  ~~~JavaScript
  import { FaBeer } from 'react-icons/fa';

    //Para a importação basta apenas trocar as letras apos a / no caminho pelas letras iniciais do Icone desejado

  class Question extends React.Component {
      render() {
    return <h3> Lets go for a <FaBeer />? </h3>
    }
  }
  ~~~

---

&nbsp;

## React-router-dom
  > Biblioteca que ajuda a gerenciar as rotas nas paginas.

  - Comando para instalação:
   `npm i react-router-dom`

&nbsp;

---

&nbsp;

## UUID
  > Biblioteca voltada para geração de IDs aleatórios e unicos.

  - Comando para instalação:
   `npm i uuid`

  - Importação e posterior utilização, com exemplo de ID gerado:

   ~~~JavaScript
  import { v4 as uuidv4 } from 'uuid';

    uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  ~~~

   
---

&nbsp;


## Como mudar o icone de aba em uma aplicação React criada com `npx create-react-app`:

&nbsp;

  > No arquivo index.html encontrado na pasta public, use a tag (no head)
- ~~~HTML
   <link rel="icon" type="image/png" sizes="40x40" href="%PUBLIC_URL%/assets/favicon.ico.png" />

   <!-- Sendo size- o tamanho da imagem, type o tipo dela, e href- o caminho relativo -->
  ~~~

---

    