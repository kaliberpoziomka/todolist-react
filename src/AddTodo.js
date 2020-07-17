import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        title: '',
        content: '',
        id: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            title: '',
            content: '',
            id: ''
        })
    }

    handleChange = (e) => {
        let id = Math.floor(Math.random()*1000);
        this.setState({
            [e.target.name]: e.target.value,
            id: id
        })
    }

    render() {

        return(
            <form className="container center" onSubmit={this.handleSubmit}>
                <h1 className="pink-text">Add Todo!</h1>
                <label htmlFor="title">Add task title</label>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                <label htmlFor="title">Add task content</label>
                <input type="text" name="content" onChange={this.handleChange} value={this.state.content}/>
                <button className="btn pink">Add Todo</button>
            </form>
        )
    }
}

export default AddTodo