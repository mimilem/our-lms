import React, { useState, useEffect } from 'react';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import { listStudents } from '../../../../graphql/queries';
import * as mutations from '../../../../graphql/mutations';

//import the styling compnent(s).
import './students.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import StudentsList from '../../Components/StudentsList';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function StudentsPage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('students');

    const [students, setStudents] = useState([])
    const [studentFilterData, setStudentFilterData] = useState([])
    const [searchStudentByName, setSearchStudentByName] = useState('')

    /* fetch the API data of students */
    useEffect( () => {
        const fetchStudents = async () => {
            try {
                const studentResults = await API.graphql(
                    graphqlOperation(listStudents)
                )
                const student = studentResults.data.listStudents.items
                setStudents(student)
                setStudentFilterData(student)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchStudents();
    }, [])

    const searchStudentsByNameFilter = (text) => {
        if (text) {
            const newData = students.filter((item) => {
                const itemData = item.studentFullname ? item.studentFullname.toUpperCase() 
                                : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            });
            setStudentFilterData(newData)
            setSearchStudentByName(text)
        } else {
            setStudentFilterData(students)
            setSearchStudentByName(text)
        }
    }

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="staff-pages-container">

            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} /> 

            <div className='staff-pages-content'>

            <div className='staff-pages-header-tilte'>Students</div>
                <hr className='staff-page-hr'/>

                <div className='students-page-header'>
                    <div className='search-students-container'>
                        <input
                            type='text'
                            placeholder='Search a student'
                            className='search-student'
                            autoFocus={true}
                            onChange={(e) => searchStudentsByNameFilter(e.target.value)}
                            value={searchStudentByName}
                        />
                    </div>
                    <div className='register-button-container'>
                        <button 
                            className='register-button'
                            title='Register a student'>
                            Register
                        </button>
                    </div>
                </div>

                <StudentsList studentFilterData={studentFilterData} />

            </div>
        </div>
    );
}

export default StudentsPage;