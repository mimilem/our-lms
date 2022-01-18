import React, {useEffect, useState} from 'react';

// Let's import our GraphQl queries and extentions to fetch data from the API
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../graphql/queries';

import Header from '../Header';
import SideNavigation from '../../Components/SideNavigation';


function HeaderAndSideNav({toggledBar, setToggledBar, activeTab}) {

    const [campus, setCampus] = useState([])

    // fetch a campus
    useEffect(() => {
        const fetchCampus = async () => {
            try {
                const campusResults = await API.graphql(
                    { query: queries.getCampus, variables: { id: '029f5130-90c3-40f3-8bf7-f80db1e8f1b0' }}
                )
                const campus = campusResults.data.getCampus
                setCampus(campus)
                console.log(campus.faculties.items)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchCampus();
    }, [])

    const campusName = campus.campusName

    return (
            <div>
                <Header campusName={campusName} />
                
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
                        activeTab={activeTab} />
                </div>
            </div>
    );
}

export default HeaderAndSideNav;