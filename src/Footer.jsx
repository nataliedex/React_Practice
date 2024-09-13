import React from 'react'

const Footer = () => {
    const name = "Natalie Blumen";
    const date = new Date();
    const year = date.getFullYear();

  return (
    <div>
        <p>Written by {name}</p>
        <p>Copywrite {year}</p>
    </div>
  )
}

export default Footer