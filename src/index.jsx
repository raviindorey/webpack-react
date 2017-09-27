import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render(){
    return(
      <h1>React is working</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));