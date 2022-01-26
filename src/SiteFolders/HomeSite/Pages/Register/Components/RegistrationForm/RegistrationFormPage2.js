import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import emailjs from '@emailjs/browser';

import { useDetectClickOutside } from 'react-detect-click-outside';

import './register-form.css';

import NavigationTab from '../../../../Components/NavigationTab';
import SubmissionMessage from '../SubmissionMessage/SubmissionMessage';


function RegistrationFormPage2() {

    const [back, setBack] = useState(true)

    const [isShown, setIsShown] = useState(false);
    const [isDepartmentShown, setIsDepartmentShown] = useState(false);

    const [showSubmissionMsg, setShowSubmissionMsg] = useState(false);

    const closeDropdown = () => { setIsShown(false) }
    const ref = useDetectClickOutside({ onTriggered: closeDropdown });
    
    const closeDepartmentDropdown = () => { setIsDepartmentShown(false) }
    const refs = useDetectClickOutside({ onTriggered: closeDepartmentDropdown });

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Apply | Vinco-elearning"
    }, []);

    let location = useLocation()
    let studentPageOneDetails = {
        studentYearOfStudy: location.state.yearOfStudy, 
        studentTitle: location.state.studentTitle, 
        studentFullName: location.state.studentFullName, 
        studentSurname: location.state.studentSurname, 
        studentPhoneNumber: location.state.studentPoneNumber, 
        studentEmail: location.state.studentEmail, 
        studentGender: location.state.studentGender, 
        studentCountryOfBirth: location.state.studentCountryOfBirth, 
        studentDocumentID: location.state.studentDocumentID, 
        studentNationality: location.state.studentNationality, 
        lcStudentHomeLanguage: location.state.studentHomeLanguage,
        back: back 
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9ts60pl', 'template_e6p7onj', form.current, 'user_jARVxDXof45LgTfcZkUiu')
        .then((result) => {
            console.log(result.text);
            setShowSubmissionMsg(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    let message = `Full name: ${studentPageOneDetails.studentFullName}`

    return (
        <div className='register-page-container'>

            <NavigationTab />

            <div className='registration-form-background'>
                <form className='register-page-content' ref={form} onSubmit={sendEmail}>
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

                        <div className='form-dropdown-container'>
                            <input 
                                placeholder='Choose a Faculty'
                                className='md-registration-form-input'
                                type='text'
                                onClick={() => setIsShown(true)} ref={ref} 
                            />
                            { isShown === true ? 
                            <>
                                <div className='form-dropdown'>
                                    Health
                                </div>
                                <div className='form-dropdown'>
                                    Engeneering 
                                </div>
                            </> : []
                            }
                        </div>
                        
                        <hr className='registration-form-hr'/>

                        <div className='form-dropdown-container'>
                            <input 
                                placeholder='Choose a department'
                                className='lg-registration-form-input'
                                type='text'
                                onClick={() => setIsDepartmentShown(true)} refs={refs} 
                            />
                            { isDepartmentShown === true ? 
                            <>
                                <div className='form-dropdown'>
                                    Accounting
                                </div>
                            </> : []
                            }
                        </div>

                        <input 
                            placeholder='Year'
                            className='sm-registration-form-input'
                            type='text'
                        />
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

                        <hr className='registration-form-hr'/>

                        <div className='disabled-dark-horizontal-bar'>
                            <div className='registration-section-title'>CONTACT DETAILS</div>
                        </div>
                        <input 
                            placeholder='Student Surname'
                            value={studentPageOneDetails.studentSurname} 
                            name="user_name"
                            type='text'
                            className='lg-registration-form-input'
                        />
                        <input 
                            placeholder='Student Email'
                            value={studentPageOneDetails.studentEmail} 
                            name="user_email"
                            type='text'
                            className='lg-registration-form-input'
                        />

                        <textarea 
                            value={message}
                            name="message"
                            style={{display: 'none'}}/>

                        <div className='form-pagination'>2/2</div>
                        <button className='form-next-button' type="submit" value="Send">Submit</button>

                        <Link to={{
                            pathname:'/Register',
                            state: studentPageOneDetails
                        }}>
                            <button className='form-back-button'>Back</button>
                        </Link>
                    </div>
                    
                    <div style={{display: showSubmissionMsg === false ? 'none' : 'block'}}>
                        <SubmissionMessage />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationFormPage2;