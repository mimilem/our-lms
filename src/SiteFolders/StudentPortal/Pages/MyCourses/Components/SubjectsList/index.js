import React from 'react';

import './subjectsList.css';


function SubjectsList() {
    return (
        <div className='subjects-list-container'>
            <div className='first-subtitle'>First Semester</div>
            <ul className='subjects-list'>
                <li>Accounting Information Systems</li>
                <li>Financial Accounting</li>
                <li>Economics IA (Microeconomics)</li>
                <li> Economics IB (Macroeconomics)</li>
                <li>Commercial Law I</li>
                <li>Computational Mathematics I</li>
               <li> Business Statistics I</li>
            </ul>
            <div className='first-subtitle'>Second Semester</div>
            <ul className='subjects-list'>
                <li>Accounting Information Systems</li>
                <li>Financial Accounting</li>
                <li>Economics IA (Microeconomics)</li>
                <li> Economics IB (Macroeconomics)</li>
                <li>Commercial Law I</li>
                <li>Computational Mathematics I</li>
               <li> Business Statistics I</li>
            </ul>
        </div>
    );
}

export default SubjectsList;