import React, {useState, useEffect} from 'react';

import BackgroundAnimation from '../../Components/BackgroundAnimation'
import NavigationTab from '../../Components/NavigationTab';
import './contact.css'

function ContactPage() {

    useEffect(() => {
        document.title = "Get in touch | Vinco-elearning"
     }, []);

    return (
        <div className='contact-container'>
            <BackgroundAnimation/>
            <NavigationTab />
        </div>
    );
}

export default ContactPage;