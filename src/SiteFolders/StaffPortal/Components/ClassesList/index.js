import React from 'react';

import { Link } from 'react-router-dom';

import './classesList.css';
import '../staffComponents.css';


import editIcon from '../../../../assets/edit.png';


function ClassesList() {
    return (
        <div className='classesList-container'>
            <div className='classesList-header'>
                <div className='allClasses-text'>
                    All Classes
                </div>

                <div className='search-class-container'>
                    <input
                        type='text'
                        placeholder='Search a class'
                        className='search-class'
                    />
                </div>
            </div>
            
            <hr className='staff-page-hr' />

            <div className='class-card-container' title='View Class'>
                <Link to='/Staff/Class' className='class-card'>
                    <img 
                        src={editIcon}
                        alt=''
                        className='edit-icon'
                        title='Edit'/>
                    <div className='grade-text'>
                        First Year
                    </div>
                    <div className='classType-text'>
                        Undergraduate
                    </div>
                    <div className='subjects-text' title='View subjects'>
                        8 Subjects
                    </div>
                    <div className='students-text' title='View students'>
                        24 Students
                    </div>
                </Link>
                <div className='class-card'>
                    <img 
                        src={editIcon}
                        alt=''
                        className='edit-icon'
                        title='Edit'/>
                    <div className='grade-text'>
                        Second Year
                    </div>
                    <div className='classType-text'>
                        Undergraduate
                    </div>
                    <div className='subjects-text'>
                        8 Subjects
                    </div>
                    <div className='students-text'>
                        24 Students
                    </div>
                </div>
                <div className='class-card'>
                    <img 
                        src={editIcon}
                        alt=''
                        className='edit-icon'
                        title='Edit'/>
                    <div className='grade-text'>
                        Third Year
                    </div>
                    <div className='classType-text'>
                        Undergraduate
                    </div>
                    <div className='subjects-text'>
                        8 Subjects
                    </div>
                    <div className='students-text'>
                        24 Students
                    </div>
                </div>
            </div>

            <div style={{marginTop: 20, paddingBottom: 20, marginLeft:'3%'}}>More and stuff</div>
        </div>
    );
}

export default ClassesList;