import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Paintings from "./containers/Paintings/Paintings";
import Illustrations from "./containers/Illustrations/Illustrations";
import Exhibitions from "./containers/Exhibitions/Exhibitions";
import Modelling from "./containers/Modelling/Modelling";
import Contact from "./containers/Contact/Contact";
import RagePage from "./containers/Paintings/Rage/Rage";
import AbstractPage from "./containers/Paintings/Abstract/Abstract";
import AucartPage from './containers/Paintings/Aucart/Aucart';
import UalReportPage from "./containers/Illustrations/ual-diversity/UalDiversity";
import DigitalRapPage from "./containers/Illustrations/digital-rap/DigitalRap";
import ZombieModelPage from "./containers/Illustrations/zombie-models/ZombieModels";
import AdeptGazePage from "./containers/Exhibitions/adept-gaze/AdeptGaze";
import DegreeShowPage from "./containers/Exhibitions/degree-show/DegreeShow";
import ColourEdPage from "./containers/Exhibitions/colour-ed/ColourEd";
import ThirdEyePage from "./containers/Exhibitions/third-eye/ThirdEye";
import ArtMusicVideoPage from './containers/Paintings/ArtMusicVideo/ArtMusicVideo';

class App extends Component {
  render() {

    const routes = (
      <Switch>
        {/** Paintings */}
        <Route exact path="/paintings" component={ Paintings } />
        <Route exact path="/paintings/rage" component={ RagePage } />
        <Route exact path="/paintings/abstract" component={ AbstractPage } />
        <Route exact path="/paintings/aucart" component={ AucartPage } />
        <Route exact path="/paintings/art-music-video" component={ ArtMusicVideoPage } />

        {/** Illustrations */}
        <Route exact path="/illustrations" component={ Illustrations } />
        <Route exact path="/illustrations/ual-diversity" component={ UalReportPage } />
        <Route exact path="/illustrations/digital-rap" component={ DigitalRapPage } />
        <Route exact path="/illustrations/zombie-models" component={ ZombieModelPage } />

        {/** Exhibitions */}
        <Route exact path="/exhibitions" component={ Exhibitions } />
        <Route exact path="/exhibitions/adept-gaze" component={ AdeptGazePage } />
        <Route exact path="/exhibitions/ual-degree-show" component={ DegreeShowPage } />
        <Route exact path="/exhibitions/colour-ed" component={ ColourEdPage } />
        <Route exact path="/exhibitions/third-eye" component={ ThirdEyePage } />
        
        <Route exact path="/modelling" component={ Modelling } />
        <Route exact path="/contact" component={ Contact } />
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
