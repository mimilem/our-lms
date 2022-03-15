import React from 'react';

import './addFeesForm.css';


function AddFeesForm({showAddFees, setShowAddFees}) {
    return (
        showAddFees && (
            <div className="addFeesForm-container">
                <div className='addFeesForm'>
                    <div className='addFees-title'>Add a document</div>

                    <div className='addFees-inputs'>
                        <input
                            className='addFees-input' 
                            placeholder='Academic Year'/>
                        <input
                            className='addFile-input' 
                            type='file'/>
                    </div>
                </div>

                <div className='addFees-btns'>
                    <button onClick={() => setShowAddFees(false)} className='addFees-save-btn'>Save</button>
                    <button onClick={() => setShowAddFees(false)} className='addFees-cancel-btn'>Cancel</button>
                </div>
            </div>
        )
    );
}

export default AddFeesForm;