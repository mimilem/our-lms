import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

//import the styling compnent(s).
import './article.css'

//import all components that will be 
//displayed on the pages.
import BackgroundAnimation from '../../../Components/BackgroundAnimation'


function Article() {

    //Set the document title of the page when it loads.
    useEffect(() => {
        document.title = "Media | Vinco-elearning"
     }, []);

    return (
        <div className='article-container'>
            <BackgroundAnimation />
            
            {/* path to the article */}
            <div className='path-to-article'>
                <Link to='/'>Home</Link>/
                <Link to='/Media'> Media</Link>/
                <div>Article</div>
            </div>
        </div>
    );
}

export default Article;