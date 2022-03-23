import React, { useEffect } from 'react';

//import the styling compnent(s).
import './homeCampuses.css';

//import all components that will be 
//displayed on the pages.
import BackgroundAnimation from '../../Components/BackgroundAnimation'
import NavigationTab from '../../Components/NavigationTab';


function HomeCampuses() {

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Campuses | Vinco-elearning"
     }, []);

    return (
        <div>
            <BackgroundAnimation/>
            <NavigationTab />

            <div className="campuses-container">
                <div className="campuses-card-container">
                    <div className="campuses-card-image"/>

                    <div className="campuses-card-text-container">
                        <div className="campuses-card-text">
                            Bryanston
                        </div>
                        <div className="campuses-card-text">
                            1st Republic road, Johannesburg South Africa
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default HomeCampuses;