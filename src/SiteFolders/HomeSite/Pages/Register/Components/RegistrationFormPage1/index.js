import React from 'react';

//import the styling compnent(s).
import '../register-form.css';


//Receive the state parameters from the index page
function RegistrationFormPage1({ setPageIndex, registrationDetails }) {

    return (
        <div className='registration-form-container'>
            <div className='registration-form-title'>Application Form</div>
            <hr className='registration-form-hr'/>

            <div className='disabled-dark-horizontal-bar'>
                <div className='registration-section-title'>STUDENT INFORMATION</div>
            </div>

            <input 
                placeholder='Year of Intended Study'
                className='sm-registration-form-input'
                type='numeric'
                value={ registrationDetails.yearOfStudy }
                onChange={e => registrationDetails.setYearOfStudy(e.target.value)} />
            <br/>

            <input 
                placeholder='Title'
                className='sm-registration-form-input'
                type='text'
                value={ registrationDetails.studentTitle }
                onChange={e => registrationDetails.setStudentTitle(e.target.value)} />
            <br/>

            <input 
                placeholder='Full Names'
                className='lg-registration-form-input'
                type='text'
                value={ registrationDetails.studentFullName }
                onChange={e => registrationDetails.setStudentFullName(e.target.value)} />

            <input 
                placeholder='Surname'
                className='lg-registration-form-input'
                type='text'
                value={ registrationDetails.studentSurname }
                onChange={e => registrationDetails.setStudentSurname(e.target.value)} />
            <br/>

            <input 
                placeholder='Phone Number'
                className='lg-registration-form-input'
                type='tel'
                value={ registrationDetails.studentPoneNumber }
                onChange={e => registrationDetails.setStudentPhoneNumber(e.target.value)} />

            <input 
                placeholder='Email'
                className='lg-registration-form-input'
                type='email'
                value={ registrationDetails.studentEmail }
                onChange={e => registrationDetails.setStudentEmail(e.target.value)} />
            <br/>

            <div className='form-pagination'>1/2</div>
            
            <button 
                className='form-next-button' 
                onClick={() => { setPageIndex('page2') }} >
                Next
            </button>
        </div>
    );
}

export default RegistrationFormPage1;