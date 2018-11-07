import React,{Component} from 'react';
import align from './align.css'
import Secondpart from './SecondPart'

export default class FirstPart extends Component{
        constructor(props){
            super(props);
            this.state={
                leftSide:[],
                rightSide:[]  
            }
              this.moveDataToNextPart=this.moveDataToNextPart.bind(this);
        }
       
         moveDataToNextPart(side){
        
            if(side==="left")
                {
                    let leftArray=this.state.leftSide;
                    let firstElement= leftArray[0]
                    console.log(firstElement)
                    let newLeftArray = leftArray.filter(obj=>{return obj.Name !== firstElement.Name});
                    let rightArray = this.state.rightSide;
            
                    if(firstElement){
                        rightArray.push(firstElement);
                    }
                    this.setState({
                            rightSide: rightArray,
                            leftSide: newLeftArray
                        })
                        console.log("newLeftArray",newLeftArray)
                }
            else if(side==="right")
                {
                    let rightArray=this.state.rightSide;
                    let firstElement= rightArray[0]
                    let newRightArray = rightArray.filter(obj=>{return obj.Name !== firstElement.Name});
                    let leftArray = this.state.leftSide;
                    console.log("right",newRightArray)
                    if(firstElement){
                        leftArray.push(firstElement);
                    }
                    
                    this.setState({
                            leftSide: leftArray,
                            rightSide: newRightArray
                        })
                       
                }
        }
            
          
        componentWillMount(){
            let leftS=this.props.list;
            this.setState({
                leftSide:leftS
            })
            
        }
        render(){
            // console.log(this.state.leftSide)
           let leftArray=this.state.leftSide;
            let rightArray=this.state.rightSide;

            let name=leftArray.map((ind,key)=>{
                    return <div key={key}>
                                
                                {ind.Name}
                            </div>
                   
            })
            let rname=rightArray.map((indiv,keys)=>{
                return <div keys={keys} >
                            {indiv.Name}
                        </div>
            })
           
            return(
                <div>
                    <div className="split left">
                        <div className="centered" >
                            {name}                               
                        </div>
                    </div>
                    <button className="centerL" onClick={() =>this.moveDataToNextPart("left")}>MoveRight</button>
                    <button className="centerR" onClick={()=>this.moveDataToNextPart("right")}>MoveLeft</button>
                    <div className="split right">
                        <div className="centered">
                                {rname}
                        </div>
                    </div>  
               </div>
           );
        }

}


