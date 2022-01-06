import React from 'react';

import './classReports.css';


function Reports(props) {
    return (
        <div className='class-reports-container'>
            <div className='title'>Financial Accounting</div>
            <div className='submission-info'> 
                <b>Nephthali Salam</b> submited a document 2min ago.
                <button className='view-button'>View</button>
            </div>
        </div>
    );
}

export default Reports;