/*
 
*/

import React, {useEffect} from 'react';

import { Link } from 'react-router-dom';

//asset
import studentLoginCardIcon from '../../../../assets/graduate-cap.png'
//import styling
import './login.css';


function Login() {

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Student Portail | Vinco-elearning"
     }, []);

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
        <div className='student-loginPage-container'>
            
            <div className='student-loginPage-backgroundImage' />

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
                            type='text'/>
                        <br/>
                        <input
                            placeholder='Password'
                            type='password'
                            id="thePassword"/>
                        <div className='student-login-form-text'>
                            <div className='show-password'>
                                <input  
                                    type="checkbox" 
                                    onClick={showPassword}/>
                                Show Password 
                            </div>
                            <div className='forgot-password'>
                                Password forgotten
                            </div>
                        </div>
                    </div>

                    <Link to='/Students/Dashboard'>
                        <button className='login-button'>
                            Login
                        </button>
                    </Link>
                </div>

                <Link to='/'>
                    <div className="go-to-homeSite">Go to home</div>
                </Link>
            </div>

        </div>
    );
}

export default Login;