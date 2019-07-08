import React from 'react';
import '../App.css';
import {Switch, Route} from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


import Animation1 from './webglAnimations/animation1/Animation1';
import Animation2 from './webglAnimations/animation2/Animation2';

class DemoAnimation extends React.Component {
  render(){
    return (
      <div className="DemoAnimation">
        <div className="wrapper-footer">
          <Header></Header>
          <Switch>
            <Route path="/animation1" component={Animation1} />
            <Route path="/animation2" component={Animation2} />
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default DemoAnimation;
