import React from 'react'
import { useState } from 'react';
import { contacts} from './contacts';


const Inputs = ({addContact}) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleClick = () => {
        const newContact = { 
            id: Date.now(),
            name, 
            imgURL: name, 
            phone, 
            email };
        addContact(newContact);
        setName('');
        setImage('');
        setPhone('');
        setEmail('');


    
    };


  return (
    <div>
        <p>Name: 
            <input 
                name="name" 
                placeholder="Type Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </p>
        <p>Image: 
            <input 
                name="image" 
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
        </p>
        <p>Phone: 
            <input 
                name="phone" 
                placeholder="xxx-xxx-xxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
        </p>
        <p>Email: 
            <input 
                name="email" 
                placeholder="myname@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </p>
        <button onClick = {handleClick}>Submit</button>
        
    </div>
  );
}

export default Inputs