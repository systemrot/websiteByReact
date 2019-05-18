import React from 'react';
import Nav from './nav/Nav';
import './Header.css'

export default class Header extends React.Component {
	render(){
		return (
				<div>
					<Nav></Nav>
				</div>
			)
	}
}