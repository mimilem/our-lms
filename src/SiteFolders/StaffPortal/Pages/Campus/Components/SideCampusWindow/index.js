import React from 'react';
import { Link } from 'react-router-dom';

//import aws api and components
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../../../../../../graphql/mutations';

import './sideCampusWindow.css';


function SideCampusWindow({campusId}) {

    // This Function is used to delete a new campus
    // then reload the page.
    const deleteCampus = async () => {
        const campusDetails = {
            id: campusId.campusID,
        };
        const deleteCampus = await API.graphql({ 
            query: mutations.deleteCampus, 
            variables: {input: campusDetails}
        });
        window.location.reload(false);
    }

    return (
        <div className='sideCampustab-container'>
            <h2 className='sideCampustab-title' >Campus Details</h2>

            <div className='sideCampustab-image' />
            
            <div className='sideCampustab-campusName'>{campusId.campusName} Campus</div>

            <div className='sideCampustab-el-container'>
                <div className='sideCampustab-el'><b>Head Of Campus: </b>{campusId.campusHead}</div>
                <div className='sideCampustab-el' style={{marginTop: '1rem'}}><b>Total Number Of Campus: </b>null</div>
                <div className='sideCampustab-el'><b>Total Number Of Departments: </b>null</div>
                <div className='sideCampustab-el'><b>Total Number Of Classes: </b>null</div>

                <div className='sideCampustab-address'>
                    <div><b>Address: </b>{campusId.campusAdress}</div>
                    <div><b>City/Town: </b>{campusId.campusCity}</div>
                </div>

                <div className='sideCampustab-button'>
                    <Link to={{pathname:'/Staff/Dashboard', state:campusId}}>
                        <button 
                            className='sideCampustab-button-el'>
                                Access Campus
                        </button>
                    </Link>

                    <button 
                        className='sideCampustab-button-el'
                        onClick={deleteCampus}
                        style={{background:'red'}}>Delete Campus</button>
                </div>
            </div>
        </div>
    );
}

export default SideCampusWindow;