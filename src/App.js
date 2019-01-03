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
import RagePage from "./containers/Paintings/Rage/Rage";

class App extends Component {
  render() {

    const routes = (
      <Switch>
        <Route exact path="/paintings" component={ Paintings } />
        <Route exact path="/paintings/rage" component={ RagePage } />
        <Route exact path="/illustrations" component={ Illustrations } />
        <Route exact path="/exhibitions" component={ Exhibitions } />
        <Route exact path="/modelling" component={ Modelling } />
        <Route exact path="/commisions" component={ Commisions } />
        <Route exact path="/" component={ Home } />
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
