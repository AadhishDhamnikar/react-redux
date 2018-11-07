import React,{Component} from 'react';
import List from './List';
import Details from './Details';
import listReducer from '../reducers/listReducer';
import mydb from "../reducers/mydb.json";
import _ from 'lodash';
import Search from './Search.js';
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
        // let searchDetail=this.state.searchDetail;
       return(
        <div>
            <Search onReturn={(ind)=>this.onReturn(ind)}/>
                {
                    !_.isEmpty(indDetails) && <Details ind={indDetails}/>
                }
            

           {/*<React.ReactFragment>
               <Search/>
               </React.ReactFragment>*/}
            <div>
                <List onReturn={(ind)=>this.onReturn(ind)}/>
                {
                    !_.isEmpty(indDetails) && <Details ind={indDetails}/>
                }
            </div>
        </div>
        );
    }
}

export default Main;