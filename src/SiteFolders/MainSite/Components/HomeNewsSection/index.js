import './homeNewsSection.css'
import imageNews from '../../../../assets/pexels-mike-van-schoonderwalt-5505690.jpg'

function HomeNewsSection() {

    const imageURL = {uri: "https://www.usnews.com/dims4/USNEWS/33af360/2147483647/crop/2000x1313%2B0%2B0/resize/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fe2%2F54%2F56c9e8a344f6b685954433920dca%2F201105-microchip-stock.jpg"}

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
                            <div style={{textDecoration:'underline'}}>The World Is Going Digital And It's just the beginning</div>
                        </div>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <div className='news-image-container'>
                            <img src={imageNews}
                                className='news-image' alt=''/>
                            <div style={{textDecoration:'underline'}}>The World Is Going Digital And It's just the beginning</div>
                        </div>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='card'>
                        <div className='news-image-container'>
                            <img src={imageNews}
                                className='news-image' alt=''/>
                            <div style={{textDecoration:'underline'}}>The World Is Going Digital And It's just the beginning</div>
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
                                <div style={{textDecoration:'underline'}}>The World Is Going Digital And It's just the beginning</div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card'>
                            <div className='news-image-container'>
                                <img src={imageNews}
                                    className='news-image' alt=''/>
                                <div style={{textDecoration:'underline'}}>The World Is Going Digital And It's just the beginning</div>
                            </div>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card'>
                            <div className='news-image-container'>
                                <img src={imageNews}
                                    className='news-image' alt=''/>
                                <div style={{textDecoration:'underline'}}>The World Is Going Digital And It's just the beginning</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeNewsSection;