import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './manageUsers.css';

import HeaderAndSideNav from '../../Components/HeaderAndSideNav';

import UserList from './UserList';
import CreateUser from './CreateUser';

import { Auth, API, graphqlOperation } from 'aws-amplify';
import { 
    listTeachers, 
} from '../../../../graphql/queries';


function ManageUsersPage() {
    
    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(true);
    const [activeTab, setActiveTab] = useState('manageusers');
    const [choosedCampus, setChoosedCampus] = useState(true);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')

    const [showCreateUser, setShowCreateUser] = useState(false)

    let location = useLocation()

    const campusId = location.state.campusID

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
                activeTab={activeTab}
                choosedCampus={choosedCampus}
                campusId={campusId} /> 
                
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
                
                <UserList/>

                <CreateUser showCreateUser={showCreateUser} setShowCreateUser={setShowCreateUser} />
            
            </div>
            
        </div>
    );
}

export default ManageUsersPage;