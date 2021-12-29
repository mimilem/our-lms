import React from 'react';

import './classesList.css';

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
            
            <hr />

            <div className='class-card-container' title='View Class'>
                <div className='class-card'>
                    <img 
                        src={editIcon}
                        alt=''
                        className='edit-icon'
                        title='Edit'/>
                    <div className='grade-text'>
                        Grade 5
                    </div>
                    <div className='classType-text'>
                        Junior
                    </div>
                    <div className='subjects-text' title='View subjects'>
                        8 Subjects
                    </div>
                    <div className='students-text' title='View students'>
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
                        Grade 6
                    </div>
                    <div className='classType-text'>
                        Junior
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
                        Grade 7
                    </div>
                    <div className='classType-text'>
                        Junior
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
                        Grade 8
                    </div>
                    <div className='classType-text'>
                        Junior
                    </div>
                    <div className='subjects-text'>
                        8 Subjects
                    </div>
                    <div className='students-text'>
                        24 Students
                    </div>
                </div>
            </div>

            <br/>

            <div className='class-card-container'>
                <div className='class-card'>
                    <img 
                        src={editIcon}
                        alt=''
                        className='edit-icon'
                        title='Edit'/>
                    <div className='grade-text'>
                        Grade 9
                    </div>
                    <div className='classType-text'>
                        Junior
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
                        Grade 10
                    </div>
                    <div className='classType-text'>
                        Senior
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
                        Grade 11
                    </div>
                    <div className='classType-text'>
                        Senior
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
                        Grade 12
                    </div>
                    <div className='classType-text'>
                        Senior
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