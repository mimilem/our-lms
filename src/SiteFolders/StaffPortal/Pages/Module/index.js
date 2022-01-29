import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import the amplify API and components to handle the 
// requests.
import { API, graphqlOperation } from "aws-amplify";
import { listClassModules } from '../../../../graphql/queries';

//import the styling compnent(s).
import './module.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function ModulePage() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('moduleShelf');

    const [classModules, setClassModules] = useState([]);

    let location = useLocation()

    /* fetch the API data of faculties and departements */
    useEffect( () => {
        const fetchClassModules = async () => {
            try {
                const classModulesResults = await API.graphql(
                    graphqlOperation(listClassModules)
                )
                const classModules = classModulesResults.data.listClassModules.items
                setClassModules(classModules)
                console.log(classModules)
            } 
            catch (error) {
                console.log(error)
            }
        }
        fetchClassModules();
    }, [])

    return (
        <div  className="staff-pages-container">

            <HeaderAndSideNav 
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} /> 
                
            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Module shelf</div>
                
                <hr className='staff-page-hr'/>
                { classModules.map((item) =>
                    item.classID == null ?
                        <div className='gradient-blue-card-container'>
                            <div className='top-left-text'>{item.moduleName}</div>
                            <div className='top-right-text'><div className='more-icon'/></div>
                        </div> : [] )
                }
            </div>
            
        </div>
    );
}

export default ModulePage;