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
       
         moveDataToNextPart(clickedObj, side){
            // console.log("inside",clickedObj, this.state.leftSide);
        
            if(side==="left")
                {
                    let clickedItemKey=clickedObj;
                    let leftArray=this.state.leftSide;
                    let newLeftArray = leftArray.filter(obj=>{return obj.Name !== clickedItemKey.Name});
                    let rightArray = this.state.rightSide;
            
                    if(clickedObj){
                        rightArray.push(clickedObj);
                    }
                    this.setState({
                            rightSide: rightArray,
                            leftSide: newLeftArray
                        })
                        console.log("newLeftArray",newLeftArray)
                }
            else if(side==="right")
                {
                    let clickedItemKey=clickedObj;
                    let rightArray=this.state.rightSide;
                    let newRightArray = rightArray.filter(obj=>{return obj.Name !== clickedItemKey.Name});
                    let leftArray = this.state.leftSide;
                    console.log("right",newRightArray)
                    if(clickedObj){
                        leftArray.push(clickedObj);
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
                    return <div key={key} 
                    onClick={(key)=>this.moveDataToNextPart(ind, "left")}>
                            {ind.Name}
                            </div>
                   
            })
            let rname=rightArray.map((indiv,keys)=>{
                return <div keys={keys} 
                    onClick={(keys)=>this.moveDataToNextPart(indiv, "right")}>
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

                    <div className="split right">
                        <div className="centered">
                                {rname}
                        </div>
                    </div>  
               </div>
           );
        }

}


