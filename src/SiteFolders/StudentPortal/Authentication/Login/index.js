
// This is the login page component 
// of the student portal.


import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

// Let's import our GraphQl queries and extentions to fetch data from the API
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../graphql/queries';

//import the styling compnent(s).
import './login.css';

// import the asset(s).
import studentLoginCardIcon from '../../../../assets/graduate-cap.png';


function Login() {
    
    const [campus, setCampus] = useState([])
    const [faculty, setFaculty] = useState([])

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

    // fetch a campus and a faculty
    /*useEffect(() => {
        const fetchCampus = async () => {
            try {
                const campusResults = await API.graphql(
                    { query: queries.getCampus, variables: { id: '029f5130-90c3-40f3-8bf7-f80db1e8f1b0' }}
                )
                const facultyResults = await API.graphql(
                    { query: queries.getFaculty, variables: { id: 'f908e441-23f4-4734-aaf5-a1c123c537ce' }}
                )
                const campus = campusResults.data.getCampus
                const faculty = facultyResults.data.getFaculty
                setCampus(campus)
                setFaculty(faculty)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchCampus();
    }, [])

    const campusName = campus.campusName
    const campusID = campus.id

    const facultyName = faculty.facultyName
    const facultyID = faculty.id
    const facultyCampusID = faculty.campusID

    const campusDetails = {
        campusName,
        campusID
    }
    
    const facultyDetails = {
        facultyName,
        facultyID,
        facultyCampusID
    }*/
    
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
                            type='text' />
                        <br/>
                        <input
                            placeholder='Password'
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

                    <Link to={{     
                        pathname:'/Students/Dashboard',
                    }}>
                        <button className='student-login-login-button'>
                            Login
                        </button>
                    </Link>
                </div>

                <Link to='/'>
                    <div className="student-login-go-to-homeSite">Go to home</div>
                </Link>
            </div>

        </div>
    );
}

export default Login;