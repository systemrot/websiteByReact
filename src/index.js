import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';

// import App from './App';
import * as serviceWorker from './serviceWorker';


import Home from './pages/Home';
import Animations from './pages/Animations';
// import Animation1 from './pages/webglAnimations/Animation1';
// import {chatBotProvider} from './context/chatBotContext';
import DemoAnimation from './pages/DemoAnimation';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function Notfound(){
	return(
		<h1>Page Notfound</h1>
		);
}

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/animations" component={Animations} />
        <Route path="/animation1" component={DemoAnimation} />
        <Route path="/animation2" component={DemoAnimation} />
         <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
