import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './register-form.css';


function RegistrationForm() {

    const [campusName, setCampusName] = useState("Bryanston")
    const [yearOfStudy, setYearOfStudy] = useState('')
    const [studentTitle, setStudentTitle] = useState('')
    const [studentFullName, setStudentFullName] = useState('')
    const [studentSurname, setStudentSurname] = useState('')
    const [studentPoneNumber, setStudentPhoneNumber] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const [studentGender, setStudentGender] = useState('')
    const [studentDateOfBirth, setStudentDateOfBirth] = useState('')
    const [studentCountryOfBirth, setStudentCountryOfBirth] = useState('')
    const [studentDocumentID, setStudentDocumentID] = useState('')
    const [studentNationality, setStudentNationality] = useState('')
    const [studentHomeLanguage, setStudentHomeLanguage] = useState('')

    let registrationDetails = {
        yearOfStudy,
        studentTitle, 
        studentFullName, 
        studentSurname, 
        studentPoneNumber, 
        studentEmail, 
        studentGender, 
        studentCountryOfBirth, 
        studentDocumentID, 
        studentNationality, 
        studentHomeLanguage,
    }

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
                    type='numeric'
                    value={yearOfStudy }
                    onChange={e => setYearOfStudy(e.target.value)}
                />
                <input 
                    placeholder='Choose Campus'
                    value={`Campus: ${campusName}`}
                    className='md-registration-form-input'
                    style={{color: '#696969'}}
                    disabled = {true}
                />
                
                <hr className='registration-form-hr'/>

                <input 
                    placeholder='Title'
                    className='sm-registration-form-input'
                    type='text'
                    value={studentTitle}
                    onChange={e => setStudentTitle(e.target.value)}
                />

                <input 
                    placeholder='Full Names'
                    className='lg-registration-form-input'
                    type='text'
                    value={studentFullName}
                    onChange={e => setStudentFullName(e.target.value)}
                />
                <input 
                    placeholder='Surname'
                    className='lg-registration-form-input'
                    type='text'
                    value={studentSurname}
                    onChange={e => setStudentSurname(e.target.value)}
                />
                <br/>

                <input 
                    placeholder='Phone Number'
                    className='lg-registration-form-input'
                    type='tel'
                    value={studentPoneNumber}
                    onChange={e => setStudentPhoneNumber(e.target.value)}
                />
                <input 
                    placeholder='Email'
                    className='lg-registration-form-input'
                    type='email'
                    value={studentEmail}
                    onChange={e => setStudentEmail(e.target.value)}
                />
                <br/>

                <input 
                    placeholder='Gender'
                    className='sm-registration-form-input'
                    type='text'
                    value={studentGender}
                    onChange={e => setStudentGender(e.target.value)}
                />
                <input 
                    placeholder='Date of Birth'
                    className='md-registration-form-input'
                    type='date'
                    value={studentDateOfBirth}
                    onChange={e => setStudentDateOfBirth(e.target.value)}
                />
                <input 
                    placeholder='Country of Birth'
                    className='md-registration-form-input'
                    value={studentCountryOfBirth}
                    onChange={e => setStudentCountryOfBirth(e.target.value)}
                />

                <input 
                    placeholder='ID / Passport Number'
                    className='md-registration-form-input'
                    type='text'
                    value={studentDocumentID}
                    onChange={e => setStudentDocumentID(e.target.value)}
                />
                <input 
                    placeholder='Nationality'
                    className='md-registration-form-input'
                    type='text'
                    value={studentNationality}
                    onChange={e => setStudentNationality(e.target.value)}
                />
                <br/>
                <input 
                    placeholder='Home Language'
                    className='lg-registration-form-input'
                    type='text'
                    value={studentHomeLanguage}
                    onChange={e => setStudentHomeLanguage(e.target.value)}
                />
                <div className='form-pagination'>1/2</div>
                
                <Link to={{
                    pathname: '/Registerpage=2',
                    state: registrationDetails }}>
                    <button className='form-next-button'>
                        Next
                    </button>
                </Link>
            </div>
            
        </>
    );
}

export default RegistrationForm;