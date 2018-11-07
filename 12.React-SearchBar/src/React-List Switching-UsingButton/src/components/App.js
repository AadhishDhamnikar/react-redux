import React, {Component} from 'react';
import FirstPart from './FirstPart';
import list from './list';

class App extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>   
                <FirstPart list={list}/>
            </div>
        )
    }
}



export default App