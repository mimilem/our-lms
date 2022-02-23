import React, { useEffect, useState } from 'react';

//Import aws api and components to create new cart item.
import { API, graphqlOperation } from "aws-amplify";
import { listCampuss, listFacultys, listDepartments, listClasss } from '../../../../graphql/queries';

//import the styling compnent(s).
import './register-page.css';

//import all components that will be 
//displayed on the pages.
import NavigationTab from '../../Components/NavigationTab';
import RegistrationFormPage1 from './Components/RegistrationFormPage1';
import RegistrationFormPage2 from './Components/RegistrationFormPage2';


function RegistrationIndexPage() {

    // Set the index form page.
    const [ pageIndex, setPageIndex ] = useState('page1');

    // the states of the form input fields.
    const [yearOfStudy, setYearOfStudy] = useState('');
    const [studentTitle, setStudentTitle] = useState('');
    const [studentFullName, setStudentFullName] = useState('');
    const [studentSurname, setStudentSurname] = useState('');
    const [studentPoneNumber, setStudentPhoneNumber] = useState('');
    const [studentEmail, setStudentEmail] = useState('');

    let registrationDetails = {
        yearOfStudy,
        setYearOfStudy,
        studentTitle, 
        setStudentTitle,
        studentFullName, 
        setStudentFullName,
        studentSurname, 
        setStudentSurname,
        studentPoneNumber, 
        setStudentPhoneNumber,
        studentEmail, 
        setStudentEmail,
    };

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Apply | Vinco-elearning"
    }, []);

    //states to display fetched data for the registration form.
    const [campusData, setCampusData] = useState([])
    const [facultyData, setFacultyData] = useState([])
    const [departmentData, setDepartmentData] = useState([])
    const [classData, setClassData] = useState([])

    /* fetch the API data of campus, faculties, departements and classes */
    useEffect( () => {
        const fetchApiData = async () => {
            try {
                //fetch Campus list
                const campusResults = await API.graphql(
                    graphqlOperation(listCampuss)
                )
                const campus = campusResults.data.listCampuss.items
                setCampusData(campus)
                
                //fetch the list of faculties
                const facultyResults = await API.graphql(
                    graphqlOperation(listFacultys)
                )
                const faculty = facultyResults.data.listFacultys.items
                setFacultyData(faculty)
                
                //fetch the list of departments
                const departmentResults = await API.graphql(
                    graphqlOperation(listDepartments)
                )
                const department = departmentResults.data.listDepartments.items
                setDepartmentData(department)
                
                //fetch the list of classes
                const classResults = await API.graphql(
                    graphqlOperation(listClasss)
                )
                const classes = classResults.data.listClasss.items
                setClassData(classes)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchApiData();
    })

    return (
        <div className='register-page-container'>

            <NavigationTab />

            <div className='registration-form-background'>
                <div className='register-page-content'>
                    { 
                    pageIndex === 'page1' ?
                        <RegistrationFormPage1 
                            setPageIndex={setPageIndex}
                            registrationDetails={registrationDetails} /> 
                    : 
                    pageIndex === 'page2' ?
                        <RegistrationFormPage2 
                            setPageIndex={setPageIndex} 
                            registrationDetails={registrationDetails}
                            campusData={campusData}
                            setCampusData={setCampusData}
                            facultyData={facultyData}
                            setFacultyData={setFacultyData}
                            departmentData={departmentData}
                            setDepartmentData={setDepartmentData}
                            classData={classData} 
                            setClassData={setClassData} />
                        : []
                    }
                </div>
            </div>

        </div>
    );
}

export default RegistrationIndexPage;