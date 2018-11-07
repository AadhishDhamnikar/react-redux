import React from "react";
//   import BackgroundImage from 'react-background-image-loader';
// import Background from '../style/img.jpeg';
// import Reg from "./Reg";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


export class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    
    render(){
        return (
            <div className="bag-img">
                <ul className="nav-bar">
                
                   <Link activeClassName="active" to="/reg">Register</Link>
                    <Link activeClassName="active" to="/about">About</Link>
                    <Link activeClassName="active" to="/list1">List of People</Link>                                  
                </ul>
                
             {this.props.children}
            </div>

        );
    }
}
 {/*<a href="https://www.cognizant.com/">Home</a>
                <a href="https://www.cognizant.com/about-cognizant" >About</a>
               <a href="https://careers.cognizant.com/global/en" >Careers</a>
               <a href="https://www.cognizant.com/services" >Services</a><br></br>
               <input type="button" onclick="./Reg.js" value="Register"/>
                 <input type="button" onclick="" value="Login"/>
                  <input type="button" onclick="" value="Official Website"/>
                   <input type="button" onclick="" value="For Queries"/>   */}