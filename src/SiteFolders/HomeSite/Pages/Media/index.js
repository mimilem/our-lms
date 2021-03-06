import React, {useEffect} from 'react';

//import all components that will be 
//displayed on the pages.
import BackgroundAnimation from '../../Components/BackgroundAnimation'
import NavigationTab from '../../Components/NavigationTab';


function MediaPage() {

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Media | Vinco-elearning"
     }, []);

    return (
        <div className='Media-container'>
            
            <BackgroundAnimation />
            
            <NavigationTab/>
            
        </div>
    );
}

export default MediaPage;