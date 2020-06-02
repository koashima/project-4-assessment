import React, { Component } from 'react';
import './App.css';
import CircleSelector from './CircleSelector';
import Circles from './Circles';

class App extends Component {
  
  state = {
    select: 1,
  };

  handleSelected = (circle) => {
    this.setState((state) => ({select: circle}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector select={this.state.select} handleSelected={this.handleSelected}/>
          <Circles select={this.state.selCircle} />
        </main>
      </div>
    );
  }
}

export default App;