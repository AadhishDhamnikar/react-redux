import React,{Component} from 'react';
import mydb from "../reducers/mydb";
import Details from "./SearchDetails";
class Search extends Component{
    
    constructor(props){
        super(props);
         
        this.state={
             query:'',
             b:[],
            
            toggle:false,
            searchText:""
        }
        this.searchInput = "";
        this.searchInputVal = "";
    }

    
    
     handleSearch(e) {
         console.log("input",this.searchInputVal);
         console.log("mydb in search", mydb);
        // this.setState({
            
        //     toggle:!this.state.toggle,
            
        //  })
        let {searchText}=this.state;
        let result=mydb.filter((ind)=>{
            console.log(ind.Name, searchText, ind.Name.includes(searchText));
            return ind.Name.includes(searchText) && searchText;
        }
        );
        this.setState({b:result});
     }
     search(e) {
        console.log("e in searh", e.target.value);
         this.setState({searchText:e.target.value});        
    }
    
    render() {
       let shouldShow = this.state.toggle;
       console.log("insearch", this.state);
       
         return(
           <div>
              <input 
                type="text" 
                placeholder="search items" 
                /*input={this.state.searchText} */
                ref={(ref) => {
                    console.log("ref", ref); return this.searchInput=ref;} }  
                className="search"
                onChange={(e) => this.search(e)} />
            <button onClick={(e)=> this.handleSearch(e)}> Search</button>
            <p>{this.state.query}</p>
            <Details input={this.state.b}/>
            <div>
                    {mydb.map((ind,key)=>{
                    return(
                        <div key={key} onClick={()=> this.props.onClick(ind)}>

                          
                            <div>{ind.Name}</div>
                           
                        </div>
                    );
                    })}
                </div> 
           </div>);
    }
}
export default Search;


/*import React, { Component } from 'react'

const WAIT_INTERVAL = 1000
const ENTER_KEY = 13

class Search extends Component {
     constructor(props){
        super(props);
  state = {
    value: ''
    }
  }

 

  handleChange = (e) => {
    clearTimeout(this.timer)

    this.setState({ value: e.target.value })

    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL)
  }

  handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer)
      this.triggerChange()
    }
  }

  triggerChange = () => {
    const { value } = this.state

    this.props.onChange(value)
  }

  render() {
    const { ...rest } = this.props

    return (
      <input
        type={rest.type}
        className={rest.className}
        placeholder={rest.placeholder}
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    )
  }
}

export default TextSearch;*/