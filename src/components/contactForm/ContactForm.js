import React, { Component } from 'react';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    hadlleSubmit = e => {
        e.preventDefault();


        this.props.addContact({ ...this.state })
        this.setState({
            name: '',
            number: '',
        })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { name, number } = this.state;
        return (

            <>

                <form onSubmit={this.hadlleSubmit}>
                    <label>Name
                    <input type="text" name="name" value={name} onChange={this.handleChange}></input>
                    </label>
                    <label>Number
                    <input type="tel" name="number" value={number} onChange={this.handleChange}></input>
                    </label>
                    <button type="submit">Add contact</button>
                </form>

            </>
        )

    }
}

