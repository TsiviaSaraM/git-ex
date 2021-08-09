import React from 'react'
import { Link } from "react-router-dom"
import ContactPreview from '../ContactPreview/ContactPreview'
import './ContactList.css'

export function ContactList({contacts}) {
    return (
        <>
        <ul className="simple-cards-grid contact-list">

            {contacts.map(contact => (
               <ContactPreview contact={contact} key={contact._id} />
            ))}
            
        </ul>
        <Link to="/contact/edit/" className="btn-add" >+</Link>
        </>
    )
}
