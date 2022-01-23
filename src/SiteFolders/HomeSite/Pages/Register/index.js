import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './register-page.css';

import BackgroundAnimation from '../../Components/BackgroundAnimation';
import Footer from '../../Components/Footer';
import NavigationTab from '../../Components/NavigationTab';
import RegistrationForm from './Components/RegistrationForm';


function RegistrationIndexPage() {
    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Apply | Vinco-elearning"
    }, []);

    return (
        <div className='register-page-container'>

            
            <NavigationTab />

            <div className='registration-form-background'>
                <div className='register-page-content'>
                    <RegistrationForm />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default RegistrationIndexPage;