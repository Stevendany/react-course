import React, { Component } from 'react';
import Header from './components/header/Header';
import Gridnews from './components/news/Gridnews';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
*/



class App extends Component {
  render() {
    return (
     <div className="">
          <Header/>
          <Gridnews/>
          <Footer/>
     </div>

    );
  }
}

export default App;
