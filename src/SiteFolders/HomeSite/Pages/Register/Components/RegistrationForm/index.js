import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './register-form.css';


function RegistrationForm() {

    const [next, setNext] =useState(false)

    const [yearOfStudy, setYearOfStudy] = useState('')
    const [studentTitle, setStudentTitle] = useState('')
    const [studentFullName, setStudentFullName] = useState('')
    const [studentSurname, setStudentSurname] = useState('')
    const [studentPoneNumber, setStudentPhoneNumber] = useState('')
    const [studentEmail, setStudentEmail] = useState('')

    let registrationDetails = {
        yearOfStudy,
        studentTitle, 
        studentFullName, 
        studentSurname, 
        studentPoneNumber, 
        studentEmail, 
    }
    let location = useLocation()

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
                    value={ location.state && location.state.back === true 
                        ? location.state.studentYearOfStudy : yearOfStudy  }
                    onChange={e => setYearOfStudy(e.target.value)}
                />
                
                <hr className='registration-form-hr'/>

                <input 
                    placeholder='Title'
                    className='sm-registration-form-input'
                    type='text'
                    value={location.state && location.state.back === true 
                        ? location.state.studentTitle : studentTitle}
                    onChange={e => setStudentTitle(e.target.value)}
                />

                <input 
                    placeholder='Full Names'
                    className='lg-registration-form-input'
                    type='text'
                    value={location.state && location.state.back === true 
                        ? location.state.studentFullName : studentFullName}
                    onChange={e => setStudentFullName(e.target.value)}
                />
                <input 
                    placeholder='Surname'
                    className='lg-registration-form-input'
                    type='text'
                    value={ location.state && location.state.back === true 
                        ? location.state.studentSurname : studentSurname}
                    onChange={e => setStudentSurname(e.target.value)}
                />
                <br/>

                <input 
                    placeholder='Phone Number'
                    className='lg-registration-form-input'
                    type='tel'
                    value={location.state && location.state.back === true 
                        ? location.state.studentPhoneNumber : studentPoneNumber}
                    onChange={e => setStudentPhoneNumber(e.target.value)}
                />
                <input 
                    placeholder='Email'
                    className='lg-registration-form-input'
                    type='email'
                    value={location.state && location.state.back === true 
                        ? location.state.studentEmail : studentEmail}
                    onChange={e => setStudentEmail(e.target.value)}
                />
                <br/>

                <div className='form-pagination'>1/2</div>
                
                <Link to={{
                    pathname: '/Registerpage=2',
                    state: registrationDetails 
                }}>
                    <button className='form-next-button' onClick={() => setNext(true)}>
                        Next
                    </button>
                </Link>
            </div>
            
        </>
    );
}

export default RegistrationForm;