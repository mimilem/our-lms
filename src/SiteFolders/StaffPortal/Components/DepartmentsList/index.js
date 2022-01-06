import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './departmentsList.css' ;


function DepartmentsList() {

    const [toggleDown1, setToggleDown1] = useState(false)
    const [toggleDown2, setToggleDown2] = useState(false)
    const [toggleDown3, setToggleDown3] = useState(false)

    return (
        <div>
            <Link to='/Staff/Class' className='exams-calendar-tilte'>
                + Add a new department
            </Link>     
            <div className='this-container'>
                { toggleDown1 === false ?
                    <div 
                        className='class-exams-calendar-tilte' style={{marginBottom:'25px'}} 
                        onClick={()=> setToggleDown1(true)}>
                        Commerce, Law and Management <div className='access'>↓</div>
                    </div> 
                    :
                    <>
                        <div className='active-class-exams-calendar-tilte' onClick={()=> setToggleDown1(false)}>
                            Commerce, Law and Management <div className='access'>↑</div>
                        </div> 
                        <div className='departments-list-container'>
                            <ul>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                            </ul>
                        </div> 
                    </>
                }
            </div>

            <div className='this-container'>
                { toggleDown2 === false ?
                    <div 
                        className='class-exams-calendar-tilte' style={{marginBottom:'25px'}} 
                        onClick={()=> setToggleDown2(true)}>
                        Engineering and the Built Environment <div className='access'>↓</div>
                    </div> 
                    :
                    <>
                        <div className='active-class-exams-calendar-tilte' onClick={()=> setToggleDown2(false)}>
                        Engineering and the Built Environment <div className='access'>↑</div>
                        </div> 
                        <div className='departments-list-container'>
                            <ul>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                            </ul>
                        </div> 
                    </>
                }
            </div>

            <div className='this-container'>
                { toggleDown3 === false ?
                    <div 
                        className='class-exams-calendar-tilte' style={{marginBottom:'25px'}} 
                        onClick={()=> setToggleDown3(true)}>
                        Health Sciences <div className='access'>↓</div>
                    </div> 
                    :
                    <>
                        <div className='active-class-exams-calendar-tilte' onClick={()=> setToggleDown3(false)}>
                        Health Sciences <div className='access'>↑</div>
                        </div> 
                        <div className='departments-list-container'>
                            <ul>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                                <Link to='/Staff/Class'>
                                    <li>Financial accounting</li>
                                </Link>
                            </ul>
                        </div> 
                    </>
                }
            </div>

        </div>
    );
}

export default DepartmentsList;