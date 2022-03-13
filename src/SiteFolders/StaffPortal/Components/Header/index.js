/*
    The header container of the staff portail.
*/

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

// Import the amplify API and components to handle the 
// requests.
import { API, graphqlOperation } from "aws-amplify";
import { listNotificationss } from '../../../../graphql/queries';
import * as mutations from '../../../../graphql/mutations';

//import the styling compnent(s).
import './header.css';


function Header({ campusDetails }) {
    
    const [isShown, setIsShown] = useState(false);
    const [isShownNotification, setIsShownNotification] = useState(false);
    const [notifications, setNotifications] = useState([])

    const closeDropdown = () => {
        setIsShown(false);
    }
    const ref = useDetectClickOutside({ onTriggered: closeDropdown });

    const closeNotifications = () => {
        setIsShownNotification(false);
    }
    const refNotifications = useDetectClickOutside({ onTriggered: closeNotifications });


    // Initiate the window size.
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // On Screen size change, update the initiale Screen size state.
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    /* fetch the list of all notifications */
    useEffect( () => {
        //automatically scroll to top
        window.scrollTo(0,0);

        const fetchNotifications = async () => {
            try {
                const notificationResults = await API.graphql(
                    graphqlOperation(listNotificationss)
                )
                const notifications = notificationResults.data.listNotificationss.items
                setNotifications(notifications)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchNotifications();
    }, [])

    return (
        <div className="staff-header-container">

            <div className='staff-header-logo-container'>
                <div className='staff-header-logo'/>
            </div>
            
            <div className='header-institution-name'>
                Vinco-eLearning<b>
                {
                    campusDetails.campusName ? 
                    ` - ${campusDetails.campusName} Campus` 
                    : [] 
                }</b>
            </div>

            {/* DON'T TOUCH */}

            {/* <div className='path-container'>
                {(screenWidth > 700) && (
                    <div className='path'>
                        Staff / Dashboard
                    </div>
                )}
            </div> */}

            <div
                onClick={() => setIsShownNotification(true)} ref={refNotifications} 
                className='notification-icon-container'>
                <div className='notification-icon' />
                {isShownNotification && (
                    <ul className='notification-dropdown'>
                        <div>
                            {
                                notifications.map(notification =>(
                                    <div className='notification-list-container'>
                                        <div className='notification-title'>{notification.title}</div>
                                        <div className='notification-description'>{notification.description}</div>
                                        <hr className='nav-tab-hr'/>
                                    </div>
                                ))
                            }
                        </div>
                    </ul> 
                )}
            </div>
            
            <div onClick={() => setIsShown(true)} ref={ref} >

                <div className='user-settings'>
                    <div className='user-avatar' />
                </div>
                
                {isShown && (
                    <ul className='profile-dropdown-menu'>
                        <Link to='/Staff/AdminProfile' style={{textDecoration:'none'}}>
                            <li>
                                Profile
                            </li>
                        </Link>
                        <hr className='nav-tab-hr'/>
                        <li>Settings</li>
                        <hr className='nav-tab-hr'/>
                        <Link to='/Staff-login' className='sign-out'>Sign out</Link>
                    </ul> 
                )}
            
            </div>
        </div>
    );
}

export default Header;