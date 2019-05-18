import React from 'react';
import '../App.css';

import Header from '../components/header/Header';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';

class Home extends React.Component {
  render(){
    return (
      <div className="Home">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;