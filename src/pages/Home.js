import React from 'react';
import '../App.css';

import Header from '../components/header/Header';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';
import './Home.css';

class Home extends React.Component {
  render(){
    return (
      <div className="Home">
      	<div className="wrapper-footer">
    			<Header></Header>
    			<Content></Content>
      	</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;