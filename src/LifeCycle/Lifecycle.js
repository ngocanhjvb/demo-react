import React from 'react';
import Counter from './Counter'

class Lifecycle extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycle updated');
    }
    render() {
        console.log('LifeCycle render');
        return (
            <div className="counter">
                <Counter/>
            </div>
        )
    }
}

export default Lifecycle;
