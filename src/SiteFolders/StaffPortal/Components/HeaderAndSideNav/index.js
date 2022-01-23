import React, { useEffect, useState } from 'react';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import * as queries from '../../../../graphql/queries';

import Header from '../Header';
import SideNavigation from '../SideNavigation';


function HeaderAndSideNav({
    toggledBar, 
    setToggledBar, 
    activeTab, 
}) {

    const [ campus, setCampus ] = useState([])

     /* fetch the API data of a campus */
     useEffect( () => {
        const fetchCampus = async () => {
            try {
                    const campusResults = await API.graphql(
                        graphqlOperation(queries.getCampus, { id: '6d6f6976-d8d4-4d3b-b08a-1c631dfdbc32' }
                    ))
                    const campus = campusResults.data.getCampus
                    setCampus(campus)
                } 
            catch (error) {
                console.log(error)
            }
        }
        fetchCampus();
    }, [])

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
                        campusDetails={campusDetails} />
                </div>
            </div>
    );
}

export default HeaderAndSideNav;