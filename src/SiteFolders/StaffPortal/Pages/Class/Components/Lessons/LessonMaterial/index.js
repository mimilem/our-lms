import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import './lessonMaterial.css';


function LessonMaterial() {
    return (
        <div className='lesson-material-container'>
            <h1>Introduction</h1>
            <p>Generating random paragraphs can be an excellent way 
                for writers to get their creative<br/> flow going at the 
                beginning of the day. The writer has no idea what 
                topic the random<br/> paragraph will be about when it
                appears. This forces the writer to use creativity to
                complete<br/> one of three common writing challenges.
                The writer can use the paragraph as the first<br/> one of 
                a short story and build upon it. A second option is to
                use the random paragraph<br/> somewhere in a short story they create.</p>
            <br/>
            
            <div>
                Add a material <br/>
                <input type='file'/>
            </div>

            <h1>List of materials: </h1>
            <div className='list-of-materials-uploaded'>
                <img 
                    src='' 
                    alt='' className='uploadprevu'/>
                <div className='documentTitle'>structured.material.pdf</div>
                <div className='download-icon'/>
            </div>
        </div>
    );
}

export default LessonMaterial;