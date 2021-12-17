import React, {useState, useEffect} from 'react';

import BackgroundAnimation from '../../Components/BackgroundAnimation'
import ContactForm from '../../Components/ContactForm';
import NavigationTab from '../../Components/NavigationTab';
import './contact.css'

function ContactPage() {

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Get in touch | Vinco-elearning"
     }, []);

    return (
        <div className='contact-container'>
            <BackgroundAnimation/>
            <NavigationTab />
            <ContactForm />
        </div>
    );
}

export default ContactPage;