import React from 'react';
import {contacts as initialContacts} from './contacts';
import Inputs from './Inputs';
import { useState } from 'react';


const Card = () => {
    const [contacts, setContact] = useState(initialContacts);

    const addContact = (newContact) => {
        setContact([...contacts, newContact]);
    };

    return(
        <div>
            <Inputs addContact={addContact} />
            <div>
                {contacts.map((contact,index)=>(
                    <div key={contact.id}>
                        <h2>Name: {contact.name}</h2>
                        <img src={contact.imgURL} alt={contact.name}></img>
                        <p>Phone: {contact.phone}</p>
                        <p>Email: {contact.email}</p>
                    </div>
                ))}
            </div>
        </div>
        
    );    
}

export default Card