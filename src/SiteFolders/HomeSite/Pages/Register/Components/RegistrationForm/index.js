import React, { useState } from 'react';

import './register-form.css';
import RegistrationFormPage2 from './RegistrationFormPage2';
import RegistrationFormPage3 from './RegistrationFormPage3';



function RegistrationForm() {

    return (
        <>
            <div className='registration-form-container'>
                <div className='registration-form-title'>Application Form</div>
                <hr className='registration-form-hr'/>

                <div className='disabled-dark-horizontal-bar'>
                    <div className='registration-section-title'>STUDENT INFORMATION</div>
                </div>

                <input 
                    placeholder='Year of Intended Study'
                    className='md-registration-form-input'
                    type='number'
                />
                <input 
                    placeholder='Choose Campus'
                    className='md-registration-form-input'
                />
                
                <hr className='registration-form-hr'/>

                <input 
                    placeholder='Title'
                    className='sm-registration-form-input'
                    type='text'
                />

                <input 
                    placeholder='Full Names'
                    className='lg-registration-form-input'
                    type='text'
                />
                <input 
                    placeholder='Surname'
                    className='lg-registration-form-input'
                    type='text'
                />
                <br/>

                <input 
                    placeholder='Phone Number'
                    className='lg-registration-form-input'
                    type='tel'
                />
                <input 
                    placeholder='Email'
                    className='lg-registration-form-input'
                    type='email'
                />
                <br/>

                <input 
                    placeholder='Gender'
                    className='sm-registration-form-input'
                    type='text'
                />
                <input 
                    placeholder='Date of Birth'
                    className='md-registration-form-input'
                    type='date'
                />
                <input 
                    placeholder='Country of Birth'
                    className='md-registration-form-input'
                />

                <input 
                    placeholder='ID / Passport Number'
                    className='md-registration-form-input'
                    type='text'
                />
                <input 
                    placeholder='Nationality'
                    className='md-registration-form-input'
                    type='text'
                />
                <br/>
                <input 
                    placeholder='Home Language'
                    className='lg-registration-form-input'
                    type='text'
                />
                <div className='form-pagination'>1/3</div>
                <button className='form-next-button'>Next</button>
            </div>
            
            <RegistrationFormPage2 /> 

            <RegistrationFormPage3 />
        </>
    );
}

export default RegistrationForm;