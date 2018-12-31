import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Paintings from "./containers/Paintings/Paintings";
import Illustrations from "./containers/Illustrations/Illustrations";
import Exhibitions from "./containers/Exhibitions/Exhibitions";
import Modelling from "./containers/Modelling/Modelling";
import Commisions from "./containers/Commisions/Commisions";

class App extends Component {
  render() {

    const routes = (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/paintings" component={ Paintings } />
        <Route path="/illustrations" component={ Illustrations } />
        <Route path="/exhibitions" component={ Exhibitions } />
        <Route path="/modelling" component={ Modelling } />
        <Route path="/commisions" component={ Commisions } />
        <Redirect to="/" />
      </Switch>
    )

    return (
     <Layout>
       {routes}
     </Layout>
    );
  }
}

export default App;
