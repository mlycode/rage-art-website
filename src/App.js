import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const styles = {
      color: "var(--colour-accent-red)"
    }
    return (
     <p style={styles}>Test</p>
    );
  }
}

export default App;
