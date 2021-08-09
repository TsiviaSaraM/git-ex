import React from 'react'
import './ContactPreview.css'
import { Link } from "react-router-dom"

export default function ContactPreview({contact}) {
    return (

            <li className="contact-preview flex">
                    <img src={'https://robohash.org/' + contact.name + '.png?set=set4'} alt="" />
                    <h3>{contact.name}</h3>
                    {/* <p>email: {contact.email}</p> */}
                    {/* <p>phone: {contact.phone} </p> */}
                    {/* <p>id: {contact._id} </p> */}
                    {/* <button className="btn-add" >+</button> */}
                    <Link to={"/contact/edit/" + contact._id} className="btn-add" >+</Link>
                </li>

    )
}
