/*
ApiKey: b85abaa920364232afc7dfa3ac8bb3fa

Step-by-step:
-Create the Mockup
-Separate the Mockup by components
-Make the logic for the Clock component
-Get the information of the 3 newset news for "New York Times" using the first endPoint
-Get the information of the 3 newset news for "ABC News" using the second endPoint
-Use a third endpoint to get the information of the last week, and last month news from the whole api
-Get the number of all news at the moment

*/


import React, { Component } from 'react';
import Clock from 'react-live-clock';
import banner from './banner.jpg';
import logo from './logo.png';
import world from './world.gif';
import R from './reddesign.gif';
import './Header.css';

let settingBG = {
    backgroundImage: 'url(' + world + ')',
}

class Header extends Component{
    

    render(){
        return(
            <div className="bgNews row" style={settingBG}>
                    <div className="col-md-12 text-center">
                    <div className="clock">
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />                    
                    </div>
                    <img className="col-md-1 col-md-offset-8" src={logo} alt="logo"/>                                        
                    <h2 className="text-uppercase">The Newest Information around the globe</h2>
                    </div> 
            </div>
        );
    }
}

export default Header;