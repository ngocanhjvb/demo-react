import React from 'react';
import './App.css';
import Products from "./components/Products";
import Form from "./components/Form";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: 'samsung',
                    price: '10000',
                    content: 'developer'
                },
                {
                    name: 'oppo',
                    price: '15000',
                    content: 'something good'
                }, {
                    name: 'nokia',
                    price: '20000',
                    content: 'something just happening'
                }
            ],
            isActive: true
        }
    }

    deleteProduct(index) {
        let products = this.state.products;
        products.splice(index, 1)
        this.setState({
            products: products
        })
        // khi setState thi ham render dc goi, props khong the thay doi gia tri, state co the thay doi trong pham vi component
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" id="card">
                        {this.state.products.map((item, index) => <Products key={index} user={item}>
                            {item.name}
                        </Products>)}
                    </div>
                    <div className="row" id="table">
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Content</td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.products.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.content}</td>
                                        <td>
                                            <a className="btn-danger" onClick={() => {
                                                this.deleteProduct(index)
                                            }}>Delete</a>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div id="form">
                        <Form/>
                    </div>
                </div>

            </div>
        )
    }


}

export default App;
