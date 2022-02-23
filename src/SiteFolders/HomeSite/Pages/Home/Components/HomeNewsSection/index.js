import { Link } from 'react-router-dom';

//import styling
import './homeNewsSection.css'

import mediaData from '../../../../Components/data/MediaData';


function HomeNewsSection() {

    return (
        <div className = 'news-section-container'>
            <div className = 'background-container'>

                <div className='vinco-news-title'>
                    <h1>
                        Vinco News
                    </h1>
                </div>

                <div className='home-news-list'>
                    {mediaData.slice(0,6).map((item) => (
                        <Link to='/Media/Article'>
                            <div className='card-container'>
                                <div className='card'>
                                    <div className='news-image-container'>
                                        <img src={item.image}
                                            className='news-image' alt=''/>
                                        <div className='article-title' title={item.title}>
                                            {item.title.slice(0, 35).concat('...')}
                                        </div>
                                        
                                    </div>
                                        <div className='date-of-publication' title={item.dateOfPublication}>
                                            Published: {item.dateOfPublication}
                                        </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeNewsSection;