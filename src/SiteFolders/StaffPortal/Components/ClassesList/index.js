import React from 'react';

import './classesList.css'


function ClassesList(props) {
    return (
        <div className='classesList-container'>
            <div className='classesList-hearder'>
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

            <div className='class-card-container'>
                <div className='class-card'>
                    Alevel
                </div>
                <div className='class-card'>
                    Alevel
                </div>
                <div className='class-card'>
                    Alevel
                </div>
            </div>
            <br/>
            <div className='class-card-container'>
                <div className='class-card'>
                    Alevel
                </div>
                <div className='class-card'>
                    Alevel
                </div>
                <div className='class-card'>
                    Alevel
                </div>
            </div>
            <br/>
            <div className='class-card-container'>
                <div className='class-card'>
                    Alevel
                </div>
                <div className='class-card'>
                    Alevel
                </div>
                <div className='class-card'>
                    Alevel
                </div>
            </div>
        </div>
    );
}

export default ClassesList;