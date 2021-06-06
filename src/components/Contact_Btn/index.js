import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'



export default function ContactBtn() {
    const history = useHistory();
    const handleClick = () => history.push('/Contact');
    return (
        <button type="button" className='contact_Btn' onClick={handleClick}>
          Contact
        </button>
      );
    };