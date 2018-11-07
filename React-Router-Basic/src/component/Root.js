import React, {Component} from "react" ;
import Header from "./Header";
import {NavBar} from "./NavBar";

export default class Root extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <Header/>
            <NavBar/>
            {this.props.children}
       
        </div>
    );
    }
}