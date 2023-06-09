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

&nbsp;

# Dicas JavaScript:

&nbsp;

---
&nbsp;

## Yarn vs NPM:

NPM | YARN | Utilização
---------------------| -------| --------
npm init| yarn init | inicializar o gerenciador
npm install -pacote-| yarn add -pacote- | instalar um pacote no projeto
npm update -pacote-| yarn upgrade -pacote- | atualizar um pacote do projeto
npm remove -pacote-| yarn remove -pacote- | remover um pacote do projeto


&nbsp;

---



## Spread Operator:

~~~JavaScript
  curso = {
    …curso,
    ano: 2021
  }

  //Resultado:

  //curso = {
  //instrutor: "Luiz Fernando",
  //curso: "React com Typescript",
  //ano: 2021
  //}
~~~

> Esse `...curso` dentro das chaves significa que dentro daquele novo objeto que está sendo criado terá tudo que curso tinha e o ano que faltava.

---

&nbsp;

## Ternaries:

~~~JavaScript
    return (
      <>
        {condicao ?
          <p> Atende a condição </p>
        :
          <p> Não atende a condição </p>
        }
      </>
    )  
~~~

> O Ternarie e extremamente eficiente para renderização dinamica economizando codigo e tornando mais legivel

  - ### Exemplo de ternário em classes CSS
  ~~~JavaScript
    return (
      <button className={condicional ? "classe-com-condicional" : "classe-sem-condicional"}>
    Meu botão
      </button>
    )
  ~~~

&nbsp;

- ### Exemplo de ternário em mudança de estado
  ~~~JavaScript
    const [curso, setCurso] = useState({ nome: "React com Typescript", completado: false });
    …
    setCurso({
      nome: "React com Typescript",
      completado: false,
      completado: condicao ? true : false
    })
  ~~~
  
---

&nbsp;

## Metodos HTTP REST mais usados:

- O método `GET` é o método mais comum, geralmente é usado para solicitar que um servidor envie um recurso;
- O método `POST` foi projetado para enviar dados de entrada para o servidor. Na prática, é frequentemente usado para suportar formulários HTML;
- O método `PUT` edita e atualiza documentos em um servidor;
- O método `DELETE` que como o próprio nome já diz, deleta certo dado ou coleção do servidor.

  > [Lista completa de metodos](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)
  
---

&nbsp;

## Truque para linha aparecer quando der hover

~~~CSS
li {

    list-style: none;
    display: inline-block;
    margin: 0 8

    &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: #000;
        transition: width 0.3s;
    }
    
    &:hover::after {
        width: 10
        //transition: width .3s;
    
    }
}

~~~
