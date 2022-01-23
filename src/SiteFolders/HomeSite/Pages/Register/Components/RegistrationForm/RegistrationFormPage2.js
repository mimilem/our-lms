import React from 'react';

import './register-form.css';



function RegistrationFormPage2() {
    return (
        <div className='registration-form-container'>
            <div className='registration-form-title'>Application Form</div>
            <hr className='registration-form-hr'/>

            <div className='disabled-dark-horizontal-bar'>
                <div className='registration-section-title'>Select a qualification</div>
            </div>
            <div className='md-registration-form-title'>Type of learning</div>
            <input 
                className='registration-form-checkbox'
                type='checkbox'
            /> Online
            <input 
                className='registration-form-checkbox'
                type='checkbox'
            /> Part-Time
            <input 
                className='registration-form-checkbox'
                type='checkbox'
            /> Full Time
            <input 
                placeholder='Choose a Faculty'
                className='md-registration-form-input'
                type='text'
            />
            
            <hr className='registration-form-hr'/>

            <input 
                placeholder='Choose a department'
                className='lg-registration-form-input'
                type='text'
            />
            <input 
                placeholder='Year'
                className='sm-registration-form-input'
                type='text'
            />
        </div>
    );
}

export default RegistrationFormPage2;