import React from 'react';

export default class Secondpart extends React.Component{
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div className="split right">
                        <div className="centered">
                            {/*<img src="img_avatar.png" alt="Avatar man"/>*/}
                                <ul>
                                    <li>a</li>
                                    <li>b</li>
                                    </ul>
                        </div>
                </div>
            )
        }
        //   console.log("inside",this.state.leftSide);
        //     // let array = this.indexOf(this.ind.Name)
        //     let {leftSide}=this.state;
        // let fArray=leftSide.filter((ind)=>{
        //     // console.log(ind.Name, searchText, ind.Name.includes(searchText));
        //     return this.setState({finalArray: fArray});
        // });
            
        //     console.log({finalArray})
        // }


        //  moveDataToNextPart(leftSide){
        //     console.log("inside",this.state.leftSide);
        //     // let array = this.indexOf(this.ind.Name)
        //     leftSide=leftSide.splice((ind)=>{
        //         2, 0,ind.Name});
        //     this.setState({finalArray: fArray});
        //     console.log({finalArray})
        // }
}

