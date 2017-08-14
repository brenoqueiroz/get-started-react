import React from 'react';

class Welcome extends React.Component {
  
  onClick = () => {
    alert('Evento click no React');
  }

  render() {
    return <h1 onClick={this.onClick}>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
