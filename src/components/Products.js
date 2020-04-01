import React from 'react';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.buySomethingWithConstructor = this.buySomethingWithConstructor.bind(this)
    }

    buySomething(text) {
        console.log(text)
    }

    buySomethingWithConstructor() {
        console.log(this.props.user.price)
    }


    render() {
        return (
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.children}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.user.price}</h6>
                        <p className="card-text">{this.props.user.content}</p>
                        <a className="btn btn-danger" onClick={() => {
                            this.buySomething(this.props.user.price)
                        }}>Buy It</a>
                        <a className="btn btn-danger" onClick={
                            this.buySomethingWithConstructor
                        }>Buy It With Constructor</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;
