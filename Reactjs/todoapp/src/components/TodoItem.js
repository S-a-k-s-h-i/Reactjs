import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => {
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration:'line-through'
        //     }
        // }else{
        //     return {
        //         textDecoration:'none'
        //     }
        // }
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed?'line-through':'none'
        }
    }

    render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <h3>
                <input type='checkBox' 
                onChange={this.props.markComplete.bind(this,id)}/>{' '}
                {title}
                <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
                </h3>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}
// const itemStyle = {
//     backgroundColor:'#f4f4f4'
// }

const btnStyle = {
   background:'#ff0000',
   color:'#fff',
   borderRadius:'50%',
   border:'none',
   float:'right',
   padding:'2px 5px'
}

export default TodoItem
