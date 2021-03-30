import React,{ Component } from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    incrementCount(){
        // this.setState({
        //     count: this.state.count + 1
        // },() => {console.log('Counter is ',this.state.count)})
        // console.log(this.state.count);

        this.setState((prevState) => ({
            count:prevState.count + 1
        }))
        console.log(this.state.count);
        
    }

    incrementByFive(){
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render(){
       return (
           <>
               <h1>Counter is {this.state.count}</h1>
               <button onClick = {() => this.incrementByFive()}>increment</button>
           </>
       )
   }
}

export default Counter;