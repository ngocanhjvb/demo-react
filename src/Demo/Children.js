import React from 'react';

class Children extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onSomethingChange(e.target.value);
    }

    render() {
        return (
            <fieldset>
                <input type="text"
                       onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

export default Children;
