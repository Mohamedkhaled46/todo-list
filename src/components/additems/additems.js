import React, { Component } from "react";
import './additems.css';

class Additems extends Component {
    state = {
        name: '',
        age: ''
    }
    handleName = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })

    }
    handleSubmit = (e) => {
        if (e.target.name.value === '')
            return false
        else {
            e.preventDefault();
            this.props.addItems(this.state)
            this.setState({
                name: '',
                age: ''
            })
        }
    }
    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <input type="text" placeholder="enter your name" className="name" id="name" onChange={this.handleName} value={this.state.name} />
                    <input type="number" placeholder="enter your name" className="age" id="age" onChange={this.handleName} value={this.state.age} />
                    <input type="submit" value="add" />

                </form>


            </div>

        )
    }
}

export default Additems;
