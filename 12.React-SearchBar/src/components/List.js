import React,{Component} from 'react';
import mydb from "../reducers/mydb";
import Details from "./Details";
import Search from "./Search";

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            toggle:false
        }
        this.showList.bind(this);
    }
    showList(){
        this.setState({
            toggle:!this.state.toggle
        })
    }
    
    render(){
        let shouldShow = this.state.toggle;
        console.log("propslist", this.props);
        return(
            <div>

                <button onClick={()=>this.showList()}>List Data</button>
                
                {/*<button >Detail data</button>*/}
               
                {shouldShow && 
                <div>
                    {mydb.map((ind,key)=>{
                    return(
                        <div key={key} onClick={()=> this.props.onReturn(ind)}>
                            <div>{ind.Name}</div>
                            <div>{ind.Age}</div>
                        </div>
                    );
                    })}
                </div> 
                }               
            </div>
        );
    }
}
export default List;