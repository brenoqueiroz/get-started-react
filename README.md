# React para iniciantes

Este é um artigo para você que que começar com React assim como eu, o objetivo desse artigo será aprender mais enquanto escrevo e também compartilhar o conhecimento para quem quiser aprender React. ***Boa parte do conteudo é retirado do proprio site do React e apenas traduzido.***

# O que você já deve saber antes de estudar React

Antes de estudar React, você deve ter uma compreensão básica de:

JavaScript
HTML
CSS

# O que é o React?

React é uma biblioteca JAVASCRIPT para desenvolvimento de interfaces de usuário criado pelo **Facebook**. Diferente do Angular que é um framework (conjunto de ferramentas para resolver vários tipos de problemas). 

Como o React é desenvolvildo somente para resolver o problema de interface a sua implementação garante uma melhor performance e boas praticas de utilização.

## Como funciona?

A manipulação de DOM é o coração da web moderna. Infelizmente, também é muito mais lento do que a maioria das operações de JavaScript.

Essa lentidão é piorada pelo fato de que a maioria dos frameworks JavaScript atualiza o DOM muito mais do que eles precisam.

## The Virtual DOM

Em React, para cada objeto DOM, existe um "objeto DOM virtual" correspondente. Um objeto DOM virtual é uma representação de um objeto DOM, como uma cópia leve.

Um objeto DOM virtual tem as mesmas propriedades que um objeto DOM real, mas o virtual não altera o 'mundo real' nao muda o que está na tela.

Manipular o DOM é lento. Manipular o DOM virtual é muito mais rápido, porque nada é desenhado na tela. 

Quando você processa um elemento JSX, cada objeto DOM virtual é atualizado. Isso parece incrivelmente ineficiente, mas o custo é insignificante porque o DOM virtual atualiza rapidamente. Uma vez que o DOM virtual é atualizado, o React compara o DOM virtual com uma foto do DOM virtual que foi executado imediatamente antes da atualização.

Ao comparar o novo DOM virtual com uma versão pré-atualização, o React descreve exatamente quais objetos DOM virtuais foram alterados. Esse processo é chamado de "diffing".

Uma vez que o React sabe quais objetos de DOM virtuais mudaram, o React atualiza esses objetos, e apenas esses objetos, no DOM real. 

Isso faz uma grande diferença! React pode atualizar apenas as partes necessárias do DOM. A reputação de desempenho do React ocorre principalmente por essa inovação.

# Componentes

O React serve para criar componentes, portanto é importante entender o conceito de componentização e saber como aplicá-lo para os seus sistemas.

Os componentes permitem que você divida a UI em peças independentes e reutilizáveis e pense em cada peça isoladamente. Da mesma forma que criamos nossas Classes e Métodos em uma linguagem orientas a objetos, devemos pensar o mesmo para os nossos componentes e seguir o princípio da responsabilidade única, onde uma classe deve fazer apenas uma coisa, deve fazê-la bem e deve fazer somente ela.

Exemplo de um componente:

***ES6:***
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

[Exemplo de uso](https://github.com/brenoqueiroz/get-started-react/tree/master/primeiro-componente): 
```html
<Welcome name="Breno Queiroz" />
```

No exemplo em ES6 (Babel) estamos usando JSX, segue uma breve descrição:

Considere esta declaração de variável:

```javascript
const element = <h1>Hello, world!</h1>;
```

Esta sintaxe de tag não é uma string nem HTML.

É chamado de JSX, e é uma extensão de sintaxe para JavaScript. Recomendo usá-lo com React para descrever o que a UI deve ter. O JSX pode lembrá-lo de uma linguagem de modelo, mas vem com todo o poder do JavaScript.

O JSX produz "elementos" React.

O Babel transforma o seu código de ES6 para ES5 (versão suportada na maioria dos navegadores). No proprio site do React eles ensinam como fazer e a maiorias dos exemplos estão em BABEL. [Veja como aqui.](https://facebook.github.io/react/docs/installation.html#creating-a-new-application) porque todos os exemplos que vou fazer serão em ES6 usando BABEL.

## Propriedades do componente

Quando um componente é processado você tem acesso as propriedades usando **props**. React é bastante flexível, mas tem uma única regra estrita:

Todos os componentes React devem atuar como funções puras em relação aos suas propriedades, ele nunca deve modificar suas próprios propriedades, ou seja, as propriedades são read-only.

Claro que as interfaces de usuário são dinâmicas e mudam ao longo do tempo. Para isso vamos apresentar um novo conceito de "state" mais a frente.

No codigo abaixo o componente Welcome usa a propriedade name (**this.props.name**) que passamos ao criar o componente

```html
<Welcome name="Breno Queiroz" />
```

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Eventos

Qual a graça de uma página estática? Vamos adicionar eventos para torná-la interativa!!!

Este componente de exemplo torna o h1 em um elemento que responde aos eventos de clique.

```javascript
class Welcome extends React.Component {
  onClick() {
    alert('Evento click no React');
  }

  render() {
    return <h1 onClick={this.onClick}>Hello, {this.props.name}</h1>;
  }
}
```

## State e Lifecycle

O state é semelhante as propriedades, mas é privado e totalmente controlado pelo componente.

Vamos criar um componente que exibe a hora corrente abaixo do componente **Welcome** que criamos anteriormente.

Ao invez de usarmos this.props vamos usar this.state para definir o estado.

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <Welcome name="Breno Queiroz" />
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

```

Esse exemplo mostra o componente Welcome e a hora corrente (quando abriu), em seguida, vamos fazer o nosso componente configurar seu próprio temporizador e atualizar a cada segundo.

Em aplicações com muitos componentes, é muito importante liberar recursos tomados pelos componentes quando são destruídos.

Queremos configurar um temporizador sempre que o Clock for renderizado para o DOM pela primeira vez. Isso é chamado de "mounting" no React.

Nós também queremos limpar esse temporizador sempre que o DOM produzido pelo Clock seja removido. Isso é chamado de "unmounting" no React.

Podemos declarar métodos especiais na classe de componente para executar algum código quando um componente é montado e desmontado:

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

Esses métodos são chamados de "lifecycle hooks".

O componentDidMount() é executado após a saída do componente ter sido renderizada no DOM. Este é um bom lugar para configurar um temporizador:

```javascript
 componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```

Observe que salvamos o ID do temporizador diretamente em this.timerID.

Embora this.props seja configurado pelo React e this.state tem um significado especial, você pode adicionar campos adicionais à classe manualmente se precisar armazenar algo que não seja usado pelo DOM.

Vamos remover o temporizador no componentWillUnmount():

```javascript
 componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

Finalmente, implementaremos o método tick() que é executado a cada segundo.

Ele usará this.setState() para agendar atualizações para o estado local do componente:

```javascript
 tick() {
    this.setState({
      date: new Date()
    });
  }
```
Agora, o relógio é atualizado na interface a cada segundo.

Há três coisas que você deve saber sobre setState().

### 1 - Não modifique o estado diretamente

Por exemplo, isso não renderizará novamente um componente:

```javascript
// Errado
this.state.comment = 'Hello';
```

Em vez disso, use setState():

```javascript
// Certo
this.setState({comment: 'Hello'});
```
O único lugar onde você pode atribuir this.state é no construtor.

### 2 - Atualizações de estado podem ser assíncronas

React pode lidar com múltiplas chamadas setState() em uma única atualização para desempenho.

Como this.props e this.state podem ser atualizados de forma assíncrona, você não deve confiar em seus valores para calcular o próximo estado.

Para corrigir, use uma segunda forma de setState() que aceita uma função e não um objeto. Essa função receberá o estado anterior como o primeiro argumento e as propriedades no momento em que a atualização é aplicada como o segundo argumento:

```javascript 
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```
### 3 - Atualizações de estado são mescladas

Quando você chama setState(), React combina o objeto que você fornece no estado atual.

Por exemplo, seu estado pode conter várias variáveis independentes:

```javascript
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

Você pode atualizá-los de forma independente com chamadas setState() separadas, então this.setState({comments}) deixa this.state.posts intacta, mas substitui completamente this.state.comments.

