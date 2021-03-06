import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {
   
    render() {
        const {count, click}=this.props;
        return (
            <h2 onMouseOver={click}>
                Hovered {count} times
            </h2>
        )
    }
}

export default HoverCounter
