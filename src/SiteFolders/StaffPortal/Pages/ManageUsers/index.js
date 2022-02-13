import React, { useState, useEffect } from 'react';

import './manageUsers.css';

import HeaderAndSideNav from '../../Components/HeaderAndSideNav';

import { Auth } from 'aws-amplify';
import UserList from './UserList';
import CreateUser from './CreateUser';


function ManageUsersPage() {
    

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('manageusers');

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')

    const [showCreateUser, setShowCreateUser] = useState(false)

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

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div  className="staff-pages-container">

            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} /> 
                
            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte' style={{marginLeft: '3rem'}}>Manage User</div>
                <hr className='staff-page-hr'/>

                <div onClick={()=>setShowCreateUser(true)} className='add-users-icon'/>
            
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
                
                <UserList />

                <CreateUser showCreateUser={showCreateUser} setShowCreateUser={setShowCreateUser} />
            
            </div>
            
        </div>
    );
}

export default ManageUsersPage;