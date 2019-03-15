
import React, { Component } from 'react';
import NXP from './logoNXP.png';
import reactLogo from '../header/logo.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="row text-center">
            <h3 className="col-md-12  small">React Training program by @Stevendany</h3>   
            <div className="col-md-6 justify-content-md-center"><img src={reactLogo}/></div>
            <div className="col-md-6 justify-content-md-center"><img src={NXP}/></div>
      </footer>
    );
  }
}

export default Footer;
