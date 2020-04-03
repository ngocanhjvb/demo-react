import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        console.log('Counter constructor')
        super(props);
        this.state = {
            counter: 0
        }
        this.increaseHandle = this.increaseHandle.bind(this)
        this.decreaseHandle = this.decreaseHandle.bind(this)
    }

    increaseHandle() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decreaseHandle() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    componentDidMount() {
        console.log('Counter did mount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Counter did update')
        console.log(prevProps, prevState, snapshot)
    }

    componentWillUnmount() {
        console.log('Counter will mount')
    }

    render() {
        console.log('Counter render')
        return (
            <div className="counter">
                <button onClick={this.increaseHandle}>Increase</button>
                <span>{this.state.counter}</span>
                <button onClick={this.decreaseHandle}>Decrease</button>
            </div>
        )
    }
}

export default Counter;
