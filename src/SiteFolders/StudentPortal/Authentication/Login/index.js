import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import './login.css';
import loginImage from '../../../../assets/graduate-cap.png'


function Login() {

    useEffect(() => {
        document.title = "Student Portail | Vinco-elearning"
     }, []);

     //Show Password Function
    const showPassword = () => {
        var x = document.getElementById("thePassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    return (
        <div className='login-container'>
            
            <div className='backgroundImage' />

            <div className='content-container'>
                <div className='login-card'>
                    <div className='login-form-container'>
                        <img 
                            src={loginImage}
                            className='loginImage' alt=''/>

                        <div className='login-text'>
                            LOG IN
                        </div>

                        <div className='login-form'>
                            <input
                                placeholder='Username'
                                type='text'
                            />
                            <br/>
                            <input
                                placeholder='Password'
                                type='password'
                                id="thePassword"
                            />
                            <div className='smallText'>
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

                        <div className='login-button'>
                            Login
                        </div>
                    </div>
                </div>

                <Link to='/'>
                    <div className="go-back">Go to home</div>
                </Link>
            </div>
        </div>
    );
}

export default Login;