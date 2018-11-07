import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Center from 'react-center';

export default class Reg extends React.Component{
     constructor(props){
     super(props);
      this.successMessage = this.successMessage.bind(this);
 }
  successMessage(e){
         alert('Registered Successfully!!!');
          e.preventDefault();
     }
 render()
 {
    
    // const divStyle = {

    //    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'

    // };
     
     return(
         
         <form className="align-reg" >
            First Name<input type="text" name="firstname"/><br></br>
            Last Name<input type="text" name="lasttname"/><br></br>
            Age      <input type="number" name="age"/><br></br>
            Address<input type="text" name="adderess"/><br></br>
                <button onClick={this.successMessage} >Submit</button>
                <button type="reset">Reset</button>
                 {/*{this.props.children}*/}
             </form>
        
     )
 }
}