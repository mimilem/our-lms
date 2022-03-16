import React, { useState, useEffect } from 'react';

//import aws api and components.
import { API } from "aws-amplify";
import * as queries from '../../../../../../graphql/queries';
import * as mutations from '../../../../../../graphql/mutations';

import './generalDetails.css';

import HeaderAndSideNav from '../../../../Components/HeaderAndSideNav';
import SideNavigation from '../../Components/SideNavigation';


function GeneralDetails() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('generalDetails');
    const [choosedCampus, setChoosedCampus] = useState(false);

    const [generalToggledBar, setGeneralToggledBar] = useState(false);

    const [institution, setInstitution] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [institutionName, setInstitutionName] = useState('')
    const [institutionAcademicYear, setInstitutionAcademicYear] = useState('')
    const [institutionAdress, setInstitutionAdress] = useState('')
    const [institutionPhone, setInstitutionPhone] = useState('')
    const [institutionEmail, setInstitutionEmail] = useState('')

    let institutionID = "e99da62e-0b01-49d9-9dd6-53968544cd86"

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    useEffect( () => {
        const fetchInstitution = async () => {
            try {
                setIsLoading(true)
                //Instituttion
                const institutionResults = await API.graphql(
                    { query: queries.getInstitution, variables: { id: institutionID }}
                )
                let institution = institutionResults.data.getInstitution
                setInstitution(institution)
                setInstitutionName(institution.institutionName)
                setInstitutionAcademicYear(institution.academicYear)
                setInstitutionAdress(institution.adress)
                setInstitutionEmail(institution.email)
                setInstitutionPhone(institution.phone)
                setIsLoading(false)
            }
            catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        fetchInstitution();
    },[])

    // This Function is used to update the institution
    // then reload the page.
    const updateInstitution = async () => {
        const institutionDetails = {
            id: institutionID,
            institutionName: institutionName,
            academicYear:institutionAcademicYear,
            adress:institutionAdress,
            email:institutionEmail,
            phone:institutionPhone,
        };
        const updatedInstitution= await API.graphql({ 
            query: mutations.updateInstitution, 
            variables: {input: institutionDetails}
        });
        window.location.reload(false);
    }

    return (
        <div className='campus-page-content'>
            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab}
                choosedCampus={choosedCampus}/>

            <SideNavigation 
                generalToggledBar={generalToggledBar} 
                setGeneralToggledBar={setGeneralToggledBar}
                activeTab={activeTab} />

            <div className='generalDetails-content' > 
                <div 
                    className='staff-pages-header-tilte' 
                    style={{marginLeft: '3rem'}} >
                    General Details
                </div>
                <hr className='staff-page-hr' />
                
                <div className='generalDetails-institution-name-container'>
                    <div className='generalDetails-institution-name'>
                        {institution.institutionName}
                    </div>
                    <div className='generalDetails-institution-edit-icon' />
                </div>

                <div className='generalDetails-input-container'>
                    <div className='generalDetails-label'>Institution name:</div>
                    <input 
                        type='text' 
                        value={institutionName}
                        onChange={e => setInstitutionName(e.target.value)}
                        className='generalDetails-input'/>
                </div>
                <div className='generalDetails-input-container'>
                    <div className='generalDetails-label'>Adress:</div>
                    <input 
                        type='text' 
                        value={institutionAdress}
                        onChange={e => setInstitutionAdress(e.target.value)}
                        className='generalDetails-input'/>
                </div>
                <div className='generalDetails-input-container'>
                    <div className='generalDetails-label'>Email:</div>
                    <input 
                        type='text' 
                        value={institutionEmail}
                        onChange={e => setInstitutionEmail(e.target.value)}
                        className='generalDetails-input'/>
                </div>
                <div className='generalDetails-input-container'>
                    <div className='generalDetails-label'>Phone:</div>
                    <input 
                        type='text' 
                        value={institutionPhone}
                        onChange={e => setInstitutionPhone(e.target.value)}
                        className='generalDetails-input'/>
                </div>

                <div className='generalDetails-input-container'>
                    <div className='generalDetails-label'>Academic Year:</div>
                    <input 
                        type='text'
                        value={institutionAcademicYear}
                        onChange={e => setInstitutionAcademicYear(e.target.value)}
                        className='generalDetails-input'/>
                </div>

                <div className='btn-generalDetails-container'>
                    <button className='btn-generalDetails-cancel'>Cancel</button>
                    <button 
                        onClick={updateInstitution}
                        className='btn-generalDetails-save'>Save</button>
                </div>

                <div className='generalDetails-stats-container'>
                    <div>
                        Total number of campuses: <b>undefined</b>
                    </div>
                    <div>
                        Total number of departments: <b>undefined</b>
                    </div>
                    <div>
                        Total number of Staff: <b>undefined</b>
                    </div>
                    <div>
                        Total number of Students: <b>undefined</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralDetails;