import React, { useEffect } from 'react';

//import all components that will be 
//displayed on the pages.
import Footer from '../../Components/Footer';
import Header from '../../Components/Header'
import HomeLastSection from './Components/HomeLastSection';
import HomeNewsSection from './Components/HomeNewsSection';


function Home() {

    //Set the document title of the page when it loads.
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