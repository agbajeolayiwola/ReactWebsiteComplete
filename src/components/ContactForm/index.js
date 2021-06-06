import React from 'react'
import './style.css'


export default function ContactForm() {
    return (
        <div className="body" >
            <div className="contact_div">
            <div className='contact_contact'>
                <h2>Contact</h2>
            </div>
                <form className='contact_form'>
                    <input 
                    type='text' 
                    placeholder='Name'
                    className='contact_name'/>

                    <input 
                    type='text' 
                    placeholder='Email'
                    className='contact_email'/><br></br>

                    <input 
                    type='number' 
                    placeholder='Phone Number'
                    className='contact_number'/><br></br>

                    <textarea 
                    rows='15'
                    placeholder='Message'
                    className='contact_message'
                    ></textarea>
                </form>
            </div>
        </div>
    )
}
