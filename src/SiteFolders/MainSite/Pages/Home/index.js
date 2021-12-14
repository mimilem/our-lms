import React, {useEffect} from 'react';
import Footer from '../../Components/Footer';

import Header from '../../Components/Header'
import HomeLastSection from '../../Components/HomeLastSection';
import HomeNewsSection from '../../Components/HomeNewsSection';

function Home() {

    useEffect(() => {
        document.title = "Vinco-elearning"
     }, []);

    return (
        <div>
            <Header/>
            <HomeNewsSection />
            <HomeLastSection />
            <Footer />
        </div>
    );
}

export default Home;