import React, { Component } from 'react'
import { contactService } from '../../services/contactService'
import './ContactDetailsPage.css'

export default class ContactDetailsPage extends Component {
    state = {
        contactId: '5a56640269f443a5d64b32ca', //TODO this will come from the url when have routing
        contact: null,
    }

    componentDidMount() {
        contactService.getContactById(this.state.contactId)
            .then(contact => this.setState({ contact }))
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div className="page-loading-screen">Loading...</div>
        return (
            <div className="contact-page-details">
                <h2>Contact page for {contact.name}</h2>
                <p>email: {contact.email}</p>
                <p>phone: {contact.phone} </p>
                <p>id: {contact._id} </p>
            </div>
        )
    }
}
