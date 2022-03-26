import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Auth } from 'aws-amplify';

import './studentSignUp.css';
import '../../applyPage.css';


function StudentSignUp(props) {

    const[formState, setFormState] = useState('signIn');
    const [signInError, setSignInError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [studentSignUpForm1, setStudentSignUpForm1] = useState(true) 
    const [studentSignUpForm2, setStudentSignUpForm2] = useState(false) 
    const [studentSignUpForm3, setStudentSignUpForm3] = useState(false) 

    const [nameInput, setNameInput] = useState('')
    const [familyNameInput, setFamilyNameInput] = useState('')
    const [phoneNumberInput, setPhoneNumberInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')

    //Show Password function.
    const showPassword = () => {
        var input = document.getElementById("thePassword");
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    }

    async function signUpStudent() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email: username,
                    name: nameInput,
                    family_name: familyNameInput,
                    phone_number: phoneNumberInput,
                },
            });
            setStudentSignUpForm2(prevState => !prevState)
            setStudentSignUpForm3(prevState => !prevState)
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
    
    async function confirmSignUp() {
        try {
            await Auth.confirmSignUp(username, code);
            await Auth.signIn(username, password);
            setFormState('signedIn')
        } catch (error) {
            console.log('error confirming sign up', error);
            console.log('error signing in', error);
        }
    }

    if (formState==='signedIn') {
        return <Redirect to='/ChooseQualification' />
    }

    return (
        <div className='student-loginPage-container'>
            
            <div className='student-loginPage-backgroundImage' />

            <div className='student-login-card-container'>
                <div className='applyPage-card'>

                    <div className='applyPage-card-title'>
                        First Step: Sign up
                    </div>
                    { studentSignUpForm1 && (
                        <>
                            <div className='student-login-form'>
                                <input
                                    placeholder='Name'
                                    onChange={e => setNameInput(e.target.value)}
                                    type='text' />
                                <input
                                    placeholder='Family name'
                                    onChange={e => setFamilyNameInput(e.target.value)}
                                    type='text' />
                                <input
                                    placeholder='Phone number'
                                    onChange={e => setPhoneNumberInput(e.target.value)}
                                    type='text' />
                            </div>

                            <div className='ChooseQualification-pagination'>
                                1/3
                            </div>

                            <Link >
                                <button 
                                    onClick={() => {
                                        setStudentSignUpForm1(prevState => !prevState)
                                        setStudentSignUpForm2(prevState => !prevState)
                                    }}
                                    className='student-login-login-button'>
                                    Next
                                </button>
                            </Link>
                        </>
                    )}
                    { studentSignUpForm2 && (
                        <>
                            <div className='student-login-form'>
                                <input
                                    placeholder='Email'
                                    onChange={e => setUsername(e.target.value)}
                                    type='text' />
                                <br/>
                                <input
                                    placeholder='Password'
                                    onChange={e => setPassword(e.target.value)}
                                    type='password'
                                    id="thePassword" />

                                <div className='student-login-form-text'>
                                    <div className='student-login-show-password'>
                                        <input  
                                            type="checkbox"
                                            onClick={showPassword} />
                                        Show Password 
                                    </div>
                                </div>
                            </div> 

                            <div className='ChooseQualification-pagination'>
                                2/3
                            </div>

                            <Link >
                                <button 
                                    onClick={ signUpStudent }
                                    className='student-login-login-button'>
                                    Get The Code
                                </button>
                            </Link>
                        </>
                    )}
                    { studentSignUpForm3 && (
                        <>
                            <div className='student-login-form'>
                                <input
                                    onChange={e => setCode(e.target.value)}
                                    placeholder='Confirmation Code'
                                    type='text' />
                            </div> 

                            <div className='ChooseQualification-pagination'>
                                3/3
                            </div>

                            <Link >
                                <button 
                                    onClick={confirmSignUp}
                                    className='student-login-login-button'>
                                    Confirm
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
}

export default StudentSignUp;