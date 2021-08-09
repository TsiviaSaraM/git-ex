import React, { Component } from 'react'
import { contactService } from '../../services/contactService'
import {ContactList} from '../../cmps/ContactList/ContactList'
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter'

export default class ContactPage extends Component {
    state = {
        contacts: null,
        filterBy: null
    }

    async componentDidMount(){
        this.loadContacts()
    }

    async loadContacts(){
        console.log(this.state.filterBy);
        const contacts = await contactService.getContacts(this.state.filterBy)
        this.setState({ contacts })
    }

    onChangeFilter = (filterBy) => {
        console.log('filterBy', filterBy);
    
        this.setState({ filterBy }, this.loadContacts)
    }
 

      
    render() {
        const {contacts} = this.state
        if (!contacts) return <div className="page-loading-screen">Loading...</div>
        return (
            <div>
                <h2>Contact page</h2>
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <p>{contacts.length} Contacts here</p>
                <ContactList contacts={contacts} />
                
            </div>
        )
    }
}
