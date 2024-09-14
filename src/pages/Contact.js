import React from 'react'
import image from "../assets/image.png";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className='contact'>
    <div className='leftSide' style={{ backgroundImage: `url(${image})` }} >  </div>
    <div className='rightSide' >
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor='name'>Full name</label>
         <input name="name" placeholder= "Enter full name.." type="text"/> 
         <label htmlFor='name'>Email</label>
         <input email="email" placeholder= "Enter email.." type="text"/> 
         <label htmlFor='message'>Message</label>
         <textArea rows="6" placeholder="Enter a message" name ="message" required></textArea>
         <button type= "submit">Send message</button>
        </form>
    </div>
    </div>
  )
}

export default Contact