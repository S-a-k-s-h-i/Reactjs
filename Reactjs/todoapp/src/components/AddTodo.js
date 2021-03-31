import React, { Component } from 'react'

export class AddTodo extends Component {

    state={
        title:''
    }
    OnChange =(e) => { this.setState({
        title:e.target.value
    })}
    OnSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({
            title:''
        })
    }

    render() {
        return (
            <form onSubmit={this.OnSubmit} style={{display:'flex'}}>
                <input type='text' 
                name='title'
                placeholder='Add Todo'
                value={this.state.title}
                style={{flex:'10',padding:'5px'}}
                onChange={this.OnChange}
                />
                <input type='submit'
                 value='submit'
                 className='btn'
                 style={{flex:'1'}}

                />

            </form>
        )
    }
}

export default AddTodo
