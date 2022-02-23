
// This is the login page component 
// of the student portal.


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Auth } from 'aws-amplify';

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
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [signedIn, setSignedIn] = useState(false)

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    async function signIn() {
        try {
            const user = await Auth.signIn(username, password)
            setSignedIn(true);
        } catch (error) {
            console.log('error signing in', error);
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
    
    return (
        <div className='staff-loginPage-container'>
            
            <div className='staff-loginPage-backgroundImage' />

            <div className='staff-login-card-container'>
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

                    <Link
                        onClick={()=> setSignedIn(true)} 
                        to={ signedIn === true ? '/Staff/SelectCampus' : '/Staff-login'} >
                        <button 
                            onClick={signIn} 
                            className='staff-login-login-button'>
                            Login
                        </button>
                    </Link>
                </div>

                <Link to='/'>
                    <div className="staff-login-go-to-homeSite">Go to home</div>
                </Link>
            </div>

        </div>
    );
}

export default StaffLogin;