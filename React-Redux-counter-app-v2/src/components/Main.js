import React,{Component} from 'react';
import List from './List';
import Details from './Details';
import listReducer from '../reducers/listReducer';
import mydb from "../reducers/mydb.json";
import _ from 'lodash';
require ('../reducers/mydb');

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            indDetails:{}
        }
        
    }
    onReturn(ind){
        this.setState({
            indDetails:ind
        })
    }
    
    render(){
        let indDetails = this.state.indDetails;
       return(
            <div>
                <List onReturn={(ind)=>this.onReturn(ind)}/>
                {
                    !_.isEmpty(indDetails) && <Details ind={indDetails}/>
                }
            </div>
        );
    }
}

export default Main;