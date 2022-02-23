import React, { useEffect } from 'react';

//import the styling compnent(s).
import './contact.css'

//import all components that will be 
//displayed on the pages.
import BackgroundAnimation from '../../Components/BackgroundAnimation'
import ContactForm from '../../Components/ContactForm';
import NavigationTab from '../../Components/NavigationTab';


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