import React, {Component} from 'react'
import { Link } from 'react-router';

class List1 extends Component {
    render () {
        return (
            <div>            
                 <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                 </ul>
                
                 {this.props.children}
            </div>
        )
    }
}

export default List1