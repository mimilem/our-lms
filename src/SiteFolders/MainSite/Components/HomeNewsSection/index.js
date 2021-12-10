import './homeNewsSection.css'

function HomeNewsSection() {
    return (
        <div className = 'news-section-container'>
            <div className = 'news-container'>

                <h1 style={{textAlign:'left', paddingLeft: 25 }}>What's up Vinco</h1>

                <div className='cards-container'>
                    <div className='card'>
                        here
                        here
                        here
                    </div>
                </div>
                <div className='cards-container'>
                    <div className='card'>
                        here
                        here
                        here
                    </div>
                </div>
                <div className='cards-container'>
                    <div className='card'>
                        here
                        here
                        here
                    </div>
                </div>
                <br/>
                <div style={{marginTop: 25}}>
                    <div className='cards-container'>
                        <div className='card'>
                            here
                            here
                            here
                        </div>
                    </div>
                    <div className='cards-container'>
                        <div className='card'>
                            here
                            here
                            here
                        </div>
                    </div>
                    <div className='cards-container'>
                        <div className='card'>
                            here
                            here
                            here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeNewsSection;