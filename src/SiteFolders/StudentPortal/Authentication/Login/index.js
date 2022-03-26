
// This is the login page component 
// of the student portal.


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

//import the styling compnent(s).
import './login.css';

// import the asset(s).
import studentLoginCardIcon from '../../../../assets/graduate-cap.png';


function Login() {

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Student Portail | Vinco-elearning"
     }, []);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [signedIn, setSignedIn] = useState(false)

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

    if (formState==='signedIn') {
        return <Redirect to='/Students/Dashboard' />
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
    
    return (

    formState === 'signIn' && (
        <div className='student-loginPage-container'>
            
            {isLoading ? 
                <div className='loader-container'>
                    <div className='loader' />
                </div>
            : '' }
        
            <div className='student-loginPage-backgroundImage'  style={{opacity: isLoading ? 0.4 : 1}} />

            <div className='student-login-card-container'>
                <div className='student-login-card'>
                    <img 
                        src={studentLoginCardIcon}
                        className='student-login-card-icon' alt=''/>

                    <div className='student-login-title'>
                        LOG IN
                    </div>

                    <div className='student-login-form'>
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

                        <div className='student-login-form-text'>
                            <div className='student-login-show-password'>
                                <input  
                                    type="checkbox" 
                                    onClick={showPassword} />
                                Show Password 
                            </div>
                            <div className='student-login-forgot-password'>
                                Password forgotten
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={SignIn} 
                        className='student-login-login-button'>
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
                    <div className="student-login-go-to-homeSite">Go to home</div>
                </Link>
            </div>

        </div>
    ));
}

export default Login;