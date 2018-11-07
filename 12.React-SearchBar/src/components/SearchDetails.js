import React from "react";
import _ from "lodash";

export default  class SearchDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listArray: props.input || []
        }
        this.renderList=this.renderList.bind(this);
    }
    componentWillReceiveProps(nextProps){
       if(!_.isEqual(this.props.input, nextProps.input)){
            this.setState({listArray:nextProps.input});
        }
    }
    renderList(listArray){
        console.log(listArray);
        let returnList=[];
        _.map(listArray, (list,index)=>{
            const keys=Object.keys(list);
            let title=<h5 key={index}>Result {index+1}</h5>;
            let plist = keys.map((key, i)=>{
                return <li key={i}>{key} : {list[key]}</li>;
            })
            returnList.push(
                <div>
                    {title}
                    <ul>
                        {plist}
                    </ul>
                </div>
            );
        });
        return returnList;
    }
    render(){
         const {listArray}=this.state;
        return(
            <div>
                {this.renderList(listArray)}
            </div>
        );
    }
}
