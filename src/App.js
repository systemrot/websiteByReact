import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
        <Form></Form>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
