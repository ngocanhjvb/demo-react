import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            content: '',
            select: 2,
            radio: 'en',
            checkbox: true
        }
    }

    handleChange = (e) => {
        let name = e.target.name
        let value = e.target.type === 'checkbox' ? e.target.checked: e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="email" type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password" onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" id="content" name="content"
                                  onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="select">SelectOption</label>
                        <select name="select" value={this.state.select} className="form-control"
                                onChange={this.handleChange}>
                            <option value={1}>Something</option>
                            <option value={2}>Anything</option>
                            <option value={3}>Good thing</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="radio">
                            <input type="radio" value="en" name="radio"
                                   checked={this.state.radio === 'en' ? 'checked' : ''} onChange={this.handleChange}/>
                            English
                        </label>
                        <label htmlFor="radio">
                            <input type="radio" value="vi" name="radio"
                                   checked={this.state.radio === 'vi' ? 'checked' : ''} onChange={this.handleChange}/>
                            Vietnamese
                        </label>

                    </div>
                    <div className="form-group">
                        <label htmlFor="checkbox">CheckBox</label>
                        <input type="checkbox" name="checkbox"
                               checked={this.state.checkbox}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-info">Reset</button>
                        &nbsp;
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Form;
