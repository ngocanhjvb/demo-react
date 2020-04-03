import React from 'react';
import Children from "./Children";
import Show from "./Show";


class Father extends React.Component {
    constructor(props) {
        super(props);
        this.handleChildrenChange = this.handleChildrenChange.bind(this);
        this.state = {show: ''};
    }

    handleChildrenChange(show) {
        this.setState({show: show});
    }


    render() {

        const show = this.state.show;


        return (
            <div>
                <Children
                    onSomethingChange={this.handleChildrenChange}/>
                <br/>
                <Show show={show}/>
            </div>
        );
    }
}

export default Father;
