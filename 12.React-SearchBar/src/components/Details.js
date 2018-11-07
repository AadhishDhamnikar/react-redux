import React,{Component} from 'react';

class Details extends Component{
    constructor(props){
        super(props);
    }
    render() {
        let ind = this.props.ind;
        console.log(ind, this.props);
         return(
            <div>
               <h1>{ind.Name}</h1>
               <h1>{ind.Age}</h1>
               <h1>{ind.Gender}</h1>
               <h1>{ind.Address}</h1>
               <h1>{ind.Source}</h1>
            </div>
        );
    }
}
export default Details;