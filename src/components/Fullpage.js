import React, {Component} from 'react';
import './Fullpage.css'
import Snowfall from 'react-snowfall'

class Fullpage extends Component {
    render() {
        
        const { children } = this.props
        return (
            <div className={`fullpage ${this.props.className || ''}`}>
               <Snowfall />
                {children}
                
            </div>
        )
    }
}

export default Fullpage