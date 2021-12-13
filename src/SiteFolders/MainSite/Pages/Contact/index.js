import React, {useState} from 'react';

import BackgroundAnimation from '../../Components/BackgroundAnimation'
import NavigationTab from '../../Components/NavigationTab';
import './contact.css'

function ContactPage() {

    return (
        <div className='contact-container'>
            <BackgroundAnimation/>
            <NavigationTab />
        </div>
    );
}

export default ContactPage;