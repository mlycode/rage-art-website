import React, { Component } from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
     <Layout>
       <p>Main content goes here</p>
     </Layout>
    );
  }
}

export default App;
