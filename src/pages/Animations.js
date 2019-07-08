import React from 'react';
import '../App.css';

import Header from '../components/header/Header';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';

class Animations extends React.Component {
  render(){
    return (
      <div className="Animations">
      	<div className="wrapper-footer">
			<Header></Header>
			<Content></Content>
      	</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Animations;