import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './contactList/ContactList';
export default class App extends Component {
    state = {
        contacts: [],
        name: ''
    }

    addContact = name => {
        const contact = {
            id: uuidv4(),
            name,
        }
        this.setState((prevState) => ({
            contacts: [...prevState.contacts, contact]
        }))
    }

    // hadlleSubmit = e => {
    //     e.preventDefault();
    //     console.log(e.target.value)
    // }

    // handleChange = e => {
    //     const { name, value } = e.target;
    //     this.setState({
    //         [name]: value
    //     })
    // }

    render() {
        return (
            <>
                <ContactList addContact={this.addContact} />
                <h2>Contacts</h2>
                <ul>
                    <li></li>
                </ul>
            </>
        )
    }
}
