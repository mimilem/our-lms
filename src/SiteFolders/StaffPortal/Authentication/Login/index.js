
// This is the login page component 
// of the student portal.


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

//import the styling compnent(s).
import './staffLogin.css';

// import the asset(s).
import staffLoginCardIcon from '../../../../assets/team.png';


function StaffLogin() {

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Staff Portail | Vinco-elearning"
     }, []);

    // Authentication states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const[formState, setFormState] = useState('signIn');
    const [signInError, setSignInError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    async function SignIn() {
        try {
            setIsLoading(true)
            await Auth.signIn(username, password)
            setFormState('signedIn')
            setIsLoading(false)
        } catch (error) {
            setSignInError(error)
            console.log('error signing in', error);
            setIsLoading(false)
        }
    }

    //Show Password function.
    const showPassword = () => {
        var input = document.getElementById("thePassword");
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    }
    if (formState==='signedIn') {
        return <Redirect to='/Staff/GeneralDetails' />
    }
    return (
        formState === 'signIn' && (
            <div className='staff-loginPage-container'>
                {isLoading ? 
                    <div className='loader-container'>
                        <div className='loader' />
                    </div>
                : '' }
                <div className='staff-loginPage-backgroundImage' style={{opacity: isLoading ? 0.4 : 1}} />

                <div
                    style={{opacity: isLoading ? 0.4 : 1}} 
                    className='staff-login-card-container'>
                    <div className='staff-login-card'>
                        <img 
                            src={staffLoginCardIcon}
                            className='staff-login-card-icon' alt=''/>

                        <div className='staff-login-title'>
                            LOG IN
                        </div>

                        <div className='staff-login-form'>
                            <input
                                placeholder='Username'
                                value={username}
                                onChange={handleChangeUsername}
                                type='text' />
                            <br/>
                            <input
                                placeholder='Password'
                                value={password}
                                onChange={handleChangePassword}
                                type='password'
                                id="thePassword" />

                            <div className='staff-login-form-text'>
                                <div className='staff-login-show-password'>
                                    <input  
                                        type="checkbox" 
                                        onClick={showPassword} />
                                    Show Password 
                                </div>
                                <div className='staff-login-forgot-password'>
                                    Password forgotten
                                </div>
                            </div>
                        </div>
                        <button 
                            type="submit"
                            onClick={SignIn}
                            className='staff-login-login-button'>
                            Login
                        </button>
                        {
                            signInError !== '' ? 
                                <div style={{color:'red'}}>
                                    Incorrect username or password
                                </div> 
                            : ''
                        }
                    </div>

                    <Link to='/'>
                        <div className="staff-login-go-to-homeSite">Go to home</div>
                    </Link>
                </div>
            </div> )
    );
}

export default StaffLogin;