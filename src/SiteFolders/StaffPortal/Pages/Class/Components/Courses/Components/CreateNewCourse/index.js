/* 
    The Pup-out window that allows the admin to create
    a new module.
    By default the display is set to false. 
*/

import React from 'react';


function CreateNewCourse({
    showCreateCourse,
    setShowCreateCourse,
    createNewCourse,
    courseStateDetails,
    showFormDropdowns,
    selectedFromInputForm,
    semesters,
    setSemester,
    months, 
    setMonths,
    refTeacher,
    refSemester,
    refMonth,
    teacherNameData,
}) {
    return (
        <div 
            className='pop-out-window'
            style={{ display:showCreateCourse === false ? 'none' : '' }} >
                <div className='create-course-pop-up-title'>
                    Create a new Course
                </div>
                
                <input
                    className='create-course-input'
                    placeholder='Course Name'
                    value={courseStateDetails.courseNameInputValue}
                    onChange={e => courseStateDetails.setCourseNameInputValue(e.target.value)}
                />
                <input
                    className='create-course-input'
                    placeholder='Code'
                    onChange={e => courseStateDetails.setCourseCodeInput(e.target.value)}
                />
                <input
                    className='create-course-input'
                    placeholder='Credit'
                    value={courseStateDetails.courseCreditInput}
                    onChange={e => courseStateDetails.setCourseCreditInput(e.target.value)}
                />

                <div style={{display: 'flex'}}>
                    <div 
                        className='create-course-input' 
                        id='select-a-teacher'
                        onClick={() => showFormDropdowns.setShowTeacherDropdown(true)}
                        ref={refTeacher} >
                        Select a teacher <div className='dropdown-icon'/>
                    </div>
                    {
                        selectedFromInputForm.selectedTeacher === true ?
                        <div className='selected-teacher'>x {teacherNameData.name}</div>
                        : []
                    }
                </div>
                { showFormDropdowns.showTeacherDropdown && (
                <div className='select-course-dropdown'>
                    <div 
                        className='select-course-dropdown-label'
                        onClick={() => selectedFromInputForm.setSelectedTeacher(true)}>
                        {teacherNameData.name}
                    </div>            
                    <hr className='select-form-hr'/>
                    <div className='select-course-dropdown-label'>
                        Antoine Griz
                    </div>  
                </div>)}

                <div style={{marginLeft:'7.5rem', marginTop:15}}>
                    <div 
                        style={{
                            fontSize:20, 
                            fontWeight:'bold',
                            marginBottom: 15
                        }}>Select a period
                    </div>
                    <div style={{display: 'block', width: '100%'}}>
                        <div style={{display:'flex', marginTop:15, marginBottom: 20}}>
                            <input 
                                type='checkbox'
                                style={{marginTop: 5}}
                                checked={courseStateDetails.courseIsPeriodAllYear === false ? true : false}
                                onClick={() => {
                                    courseStateDetails.setCourseIsPeriodAllYear(prevState => (!prevState));
                                    courseStateDetails.setCoursePeriodInput(courseStateDetails.courseIsPeriodAllYear === true ?
                                         "All Year" : '');
                                    courseStateDetails.setSelectedPeriod(true);
                                }} />
                                <div style={{fontSize:16}}>All Year</div>
                        </div>

                        <div>
                            <div 
                                className='create-course-input' 
                                id='select-a-period'
                                onClick={() => showFormDropdowns.setShowSemesterDropdown(true)}
                                ref={refSemester} >
                                Select a Semester <div className='dropdown-icon'/>
                            </div>
                            { selectedFromInputForm.selectedPeriod === true ?
                                <div className='selected-semester'>x {courseStateDetails.coursePeriodInput}</div>
                                :[]
                            }
                        </div>
                        { showFormDropdowns.showSemesterDropdown && (
                            <div className='select-period-dropdown'>
                                {
                                    semesters.map((semester) => (
                                        <>    
                                            <div 
                                                className='select-course-dropdown-label'
                                                onClick={ () => {
                                                    courseStateDetails.setCourseIsPeriodAllYear(true);
                                                    courseStateDetails.setCoursePeriodInput(semester.value);
                                                    selectedFromInputForm.setSelectedPeriod(true);
                                                }}>
                                                {semester.value}
                                            </div>
                                            <hr className='select-form-hr'/>
                                        </>
                                    ))
                                }
                            </div>)}

                        <div 
                            className='create-month-input' 
                            id='select-a-period'
                            onClick={() => showFormDropdowns.setShowMonthDropdown(true)}
                            ref={refMonth} >
                            Monthly <div className='dropdown-icon'/>
                            { showFormDropdowns.showMonthDropdown && (
                            <div className='select-month-dropdown'>
                                {
                                    months.map(month => (
                                        <div className='select-course-dropdown-label'>
                                            <>
                                                <input 
                                                    type='checkbox'
                                                    checked={month.isChecked === true ? true : false}
                                                    onClick={() => {
                                                        courseStateDetails.setCoursePeriodInput(prevState => prevState !== undefined || '' ?
                                                        `${prevState}, ${month.value}` : courseStateDetails.coursePeriodInput);
                                                        selectedFromInputForm.setIsMonthChecked(!month.isChecked);
                                                        selectedFromInputForm.setSelectedPeriod(true);
                                                    }}/> 
                                                {month.value}
                                                <hr className='select-form-hr'/>
                                            </>
                                        </div>
                                    ))
                                }
                            </div>)}
                        </div>

                        <div className='create-course-input'>
                        </div>
                    </div>
                </div>

                <div style={{marginLeft:'7.5rem', marginTop:'-2rem', marginBottom:'2rem'}}>
                    <div 
                        style={{
                            fontSize:20, 
                            marginBottom: 15
                            }}>Is the course compulsory ?
                            <div style={{display:'flex', marginTop:15, marginBottom: 20}}>
                                <input 
                                    type='checkbox'
                                    style={{marginTop: 5}} 
                                    defaultChecked={true}
                                    checked={courseStateDetails.courseCompulsoryInput === true ? true : false}
                                    onClick={()=> {courseStateDetails.setCourseCompulsoryInput((prevState) => (!prevState))}}/>
                                    <div style={{fontSize:16}}>Yes</div>
                                <input 
                                    type='checkbox'
                                    style={{marginTop: 5, marginLeft: '20px'}}
                                    defaultChecked={false}
                                    checked={courseStateDetails.courseCompulsoryInput === true ? false : true}
                                    onClick={()=> {courseStateDetails.setCourseCompulsoryInput(false)}} />
                                    <div style={{fontSize:16}}>No</div>
                            </div>
                    </div>
                </div>

                <textarea
                    id='courseOverview'
                    className='create-course-input'
                    placeholder='Course Overview'
                    value={courseStateDetails.courseDescriptionInput}
                    onChange={e => courseStateDetails.setCourseDescriptionInput(e.target.value)} />
                <div 
                    className='close-pop-up-icon' 
                    onClick={ () => setShowCreateCourse(false)} />
                <div 
                    onClick={ createNewCourse } 
                    className='create-pop-up-button'
                >Create</div>
                <div style={{paddingBottom: '5rem'}}/>
            </div>

        
    );
}

export default CreateNewCourse;