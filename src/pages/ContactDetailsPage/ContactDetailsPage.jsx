import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { contactService } from '../../services/contactService'
import './ContactDetailsPage.css'

export default class ContactDetailsPage extends Component {
    state = {
        contact: null,
    }

    componentDidMount() {
        this.loadContact()
    }

    loadContact = async () => {
        const {id} = this.props.match.params
        const contact = await contactService.getContactById(id)
        this.setState({contact})
    }

    goBack = () => {
        this.props.history.push('/')
        // this.props.history.goBack()
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
                <Link to={'/contact/edit/' + contact._id}>Edit</Link>
                <button onClick={this.goBack}>Back</button>
                <Link to={'/contact/'}>Next</Link>
            </div>
        )
    }
}
