import React from 'react';
import './Content.css';
import Cards from './cards/Cards';
import Empty from '../Empty';
import WelcomeToHome from './WelcomeToHome/WelcomeToHome';

import {Switch, Route} from 'react-router-dom';


export default class Content extends React.Component {
	render(){
		return (
				<div className='content'>
					<Switch>
					  <Route exact path="/" component={WelcomeToHome} />
					  <Route path="/downloads" component={Empty} />
					  <Route path="/animations" component={Cards} />
					  <Route path="/about" component={Empty} />
					</Switch>
				</div>
			)
	}
}