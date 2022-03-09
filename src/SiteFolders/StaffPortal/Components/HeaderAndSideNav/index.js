import React, { useEffect, useState } from 'react';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import * as queries from '../../../../graphql/queries';

//import all components that will be 
//displayed on the pages.
import Header from '../Header';
import SideNavigation from '../SideNavigation';


// Receive params from all pages.
function HeaderAndSideNav({
    toggledBar, 
    setToggledBar, 
    activeTab, 
    campusId, 
    choosedCampus,
}) {

    // State to fetch a campus.
    const [ campus, setCampus ] = useState([])

    useEffect( () => {
        fetchCampus()
    }, [])

    /* fetch the API data of a campus */
    const fetchCampus = async () => {
        if (campusId !== undefined || campusId !== '') {
            try {
                const campusResults = await API.graphql(
                    graphqlOperation(queries.getCampus, { id: campusId }
                ))
                const campus = campusResults.data.getCampus
                setCampus(campus)
            } 
            catch (error) {
            }
        } else {
            console.log("the campus has no ID")
        }
        fetchCampus();
    }
    
    const campusDetails = {
        campusID: campus.id,
        institutionName: campus.institutionName,
        campusName: campus.campusName,
    }

    return (
            <div>
                <Header campusDetails={campusDetails}/>
                
                {/* Set conditions to display the full or toggle side navigation */}
                <div 
                    className={
                        toggledBar === false ? 
                        'full-side-navigation-container' 
                        : 
                        'toggled-side-navigation-container' 
                    }>
                    <SideNavigation 
                        toggledBar={toggledBar} 
                        setToggledBar={setToggledBar} 
                        activeTab={activeTab}
                        campusDetails={campusDetails}
                        choosedCampus={choosedCampus} />
                </div>
            </div>
    );
}

export default HeaderAndSideNav;