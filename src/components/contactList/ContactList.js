import React, { Component } from 'react';

export default class ContactList extends Component {
    state = {
        name: ''
    }

    hadlleSubmit = e => {
        e.preventDefault();
        this.props.addContact(this.state.name)
        this.setState({
            name: ''
        })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { name } = this.state;
        return (

            <>
                <h2>Phonebook</h2>
                <form onSubmit={this.hadlleSubmit}>
                    <label>Name
                    <input type="text" name="name" value={name} onChange={this.handleChange}></input>
                    </label>
                    <button type="submit">Add contact</button>
                </form>

            </>
        )

    }
}

