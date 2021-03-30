import React, { Component } from 'react'

export class ClassClick extends Component {

    ClickEvent(){
        console.log('button clicked');
    }
    render() {
        return (
            <div>
               <button onClick={this.ClickEvent}>Click</button> 
            </div>
        )
    }
}

export default ClassClick
