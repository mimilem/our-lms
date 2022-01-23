import React from 'react';

import './register-form.css';



function RegistrationFormPage3() {
    return (
        <div className='registration-form-container'>
            <div className='registration-form-title'>Application Form</div>
            <hr className='registration-form-hr'/>

            <div className='disabled-dark-horizontal-bar'>
                <div className='registration-section-title'>HOME ADDRESS</div>
            </div>
            <input 
                placeholder='Home Address (Street Adress)'
                className='lg-registration-form-input'
                type='text'
            />
            <input 
                placeholder='Suburb'
                className='lg-registration-form-input'
                type='text'
            />

            <input 
                placeholder='City'
                className='lg-registration-form-input'
                type='text'
            />

            <input 
                placeholder='Postal Code'
                className='sm-registration-form-input'
                type='number'
            />
        </div>
    );
}

export default RegistrationFormPage3;