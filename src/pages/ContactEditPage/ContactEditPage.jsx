import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { contactService } from '../../services/contactService'
import './ContactEditPage.css'

export class ContactEditPage extends Component {
    state = {
        contact: null,
        errMsg: '',
    }

    async componentDidMount() {
        try {
            const { id } = this.props.match.params
            const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
            this.setState({ contact })
            console.log(contact);
        } catch (err) {
            console.log('err in ContactEditPage', err);
            this.setState({ errMsg: 'cannot find contact' })

        }
    }

    onSaveRobot = async (ev) => {
        ev.preventDefault()
        const {contact} = this.state
        await contactService.saveContact(contact)
        alert('changes saved successfully')
        this.props.history.push('/')
    }

    handleChange = ({target}) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    handleDelete = async () => {
        await contactService.deleteContact(this.state.contact._id)
        alert('contact deleted successfully')
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>{this.state.errMsg || 'Lodaing...'}</div>

        const {email, name, phone} = this.state.contact
        return (
            <div className="contact-edit-page">
                Edit or add contact here {name}
      
                <form className="contact-edit">
                    <label htmlFor="email">email</label>
                    <input value={email} name="email" type="text" id="email" onChange={this.handleChange} />

                    <label htmlFor="phone">phone</label>
                    <input value={phone} name="phone" type="text" id="phone" onChange={ this.handleChange } />

                    <label htmlFor="name">name</label>
                    <input value={name} name="name" type="text" id="name" onChange={this.handleChange} />

                    <button onClick={this.onSaveRobot}>Save</button>

                    {/* <p>{this.state.errMsg}</p> */}
                </form>

                <Link to={'/contact/' + contact._id}>Back</Link>
                <button onClick={this.handleDelete} >delete</button>
            </div>
        )
    }
}
