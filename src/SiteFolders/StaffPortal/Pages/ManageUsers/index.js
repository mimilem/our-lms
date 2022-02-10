import React, {useState} from 'react';

import './manageUsers.css';

import HeaderAndSideNav from '../../Components/HeaderAndSideNav';

import { Auth } from 'aws-amplify';


function ManageUsersPage() {
    

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('manageUsers');

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')
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
            console.log(user);
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
        <div  className="staff-pages-container">

            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} /> 
                
            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Manage User</div>
                <hr className='staff-page-hr'/>

                <div>
                    <input
                        placeholder='username'
                        className='users-input'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        placeholder='email'
                        type='email'
                        className='users-input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        placeholder='password'
                        type='password'
                        className='users-input'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={signUp}>Create</button>
                </div>

                <br/>
            
                <div>
                    <input
                        placeholder='username'
                        className='users-input'
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        placeholder='Code'
                        className='users-input'
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />

                    <button onClick={confirmSignUp} type='submit'>Confirm</button>
                </div>
            </div>
            
        </div>
    );
}

export default ManageUsersPage;