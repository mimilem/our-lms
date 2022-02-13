import React, { useState } from 'react';

import { Auth } from 'aws-amplify';

import './createUser.css';


function CreateUser({ showCreateUser, setShowCreateUser}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')

    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email
                }
            });
            window.location.reload(false);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    async function confirmSignUp() {
        try {
          await Auth.confirmSignUp(username, code);
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    return (
        <div 
            style={{ display:showCreateUser === false ? 'none' : ''}}
            className='pop-out-window'>
                <div className='create-course-pop-up-title'>
                    Create a new User
                </div>

                <div className='createUser-profile-picture'/>

                <input
                    className='create-course-input'
                    placeholder='Full name'
                />
                <input
                    className='create-course-input'
                    placeholder='Surname'
                />
                <input
                    className='create-course-input'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='create-course-input'
                    placeholder='Id'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className='create-course-input'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div style={{display: 'flex'}}>
                    <div className='create-course-input' id='select-a-teacher'>
                        Role <div className='dropdown-icon'/>
                    </div>
                    <div className='selected-teacher'>Teacher</div>
                </div>
                <div style={{display: 'flex'}}>
                    <div className='create-course-input' id='select-a-teacher'>
                        Campus <div className='dropdown-icon'/>
                    </div>
                    <div className='selected-teacher'>Bramfontein</div>
                </div>
                <div style={{display: 'flex'}}>
                    <div className='create-course-input' id='select-a-teacher'>
                        Campus <div className='dropdown-icon'/>
                    </div>
                    <div className='selected-teacher'>Course</div>
                </div>
                <div 
                    onClick={() => setShowCreateUser(false)}
                    className='close-pop-up-icon' />
                <div 
                    className='create-pop-up-button'
                    onClick={signUp}
                >Create</div>
                <div style={{paddingBottom: '5rem'}}/>
        </div>

    );
}

export default CreateUser;