import React, { Component } from 'react';
import InputArea from './components/inputArea';
import OutputArea from './components/outputArea';

class App extends Component {
  render () {
    return (
      <div className="App">
        <InputArea />
        <OutputArea />
      </div>
    );
  }
}

export default App;
