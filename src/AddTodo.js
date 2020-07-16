import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        title: '',
        content: '',
        id: ''
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleChange(target) {
        console.log(target.id);
    }

    render() {
        let id = () => Math.random();

        return(
            <form className="container center" onSubmit={() => {this.handleSubmit()}}>
                <h1 className="pink-text">Add Todo!</h1>
                <label htmlFor="title">Add task title</label>
                <input type="text" name="title" onChange={() => {this.handleChange()}}/>
                <label htmlFor="title">Add task content</label>
                <input type="text" name="content" onChange={() => {this.handleChange()}}/>
                <button className="btn pink">Add Todo</button>
            </form>
        )
    }
}

export default AddTodo