import './homeNewsSection.css'
import imageNews from '../../../../assets/pexels-mike-van-schoonderwalt-5505690.jpg'

function HomeNewsSection() {

    return (
        <div className = 'news-section-container'>
            <div className = 'background-container'>

                <div className='vinco-news-title'>
                    <h1>
                        Vinco News
                    </h1>
                </div>

                <div className='card-container'>
                    <div className='card'>
                        <div className='news-image-container'>
                            <img src={imageNews}
                                className='news-image' alt=''/>
                            <div className='article-title'>The World Is Going Digital And It's just the beginning</div>
                        </div>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <div className='news-image-container'>
                            <img src={imageNews}
                                className='news-image' alt=''/>
                            <div className='article-title'>The World Is Going Digital And It's just the beginning</div>
                        </div>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <div className='news-image-container'>
                            <img src={imageNews}
                                className='news-image' alt=''/>
                            <div className='article-title'>The World Is Going Digital And It's just the beginning</div>
                        </div>
                    </div>
                </div>
                <br/>
                <div style={{marginTop: 25}}>
                    <div className='card-container'>
                        <div className='card'>
                            <div className='news-image-container'>
                                <img src={imageNews}
                                    className='news-image' alt=''/>
                                <div className='article-title'>The World Is Going Digital And It's just the beginning</div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card'>
                            <div className='news-image-container'>
                                <img src={imageNews}
                                    className='news-image' alt=''/>
                                <div className='article-title'>The World Is Going Digital And It's just the beginning</div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card'>
                            <div className='news-image-container'>
                                <img src={imageNews}
                                    className='news-image' alt=''/>
                                <div className='article-title'>The World Is Going Digital And It's just the beginning</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeNewsSection;