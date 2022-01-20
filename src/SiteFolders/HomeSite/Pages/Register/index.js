import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Select from 'react-select';

import './register-page.css';

import BackgroundAnimation from '../../Components/BackgroundAnimation';
import NavigationTab from '../../Components/NavigationTab';
import PersonalDetails from './Components/PersonalDetails';


function RegistrationIndexPage(props) {
    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Apply | Vinco-elearning"
    }, []);
    
    const [selectedOption, setSelectedOption] = useState(null);

     const subjects = [
        {
          label: 'Programming 511',
          value: 1
        },
        {
          label: 'Network 511',
          value: 2
        },
        {
          label: 'Data science 511',
          value: 3
        },
        {
          label: 'Acounting 511',
          value: 4
        },
    ]
    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }

    return (
        <div className='register-page-container'>

            {/* path to the article */}
            <div className='path-to-article'>
                <Link to='/'>Home</Link>/
                <div>Register</div>
            </div>

            {/* Period selection to display page content  
            <div className="choose-element">
                <Select
                    placeholder="Select a campus"
                    value={selectedOption} // set selected value
                    options={subjects} // set list of the data
                    onChange={handleChange} // assign onChange function
                />
            </div>*/}

            <div className='register-page-content'>
                <PersonalDetails />
            </div>

        </div>
    );
}

export default RegistrationIndexPage;