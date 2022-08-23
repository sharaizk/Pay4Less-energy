import React from 'react';
import Header from '../../components/Header/HeaderStyleTwo';
import Footer from '../../components/Footer';
import AboutMain from './AboutMain';

// Image
import Logo from '../../assets/images/logos/logo1.png';

const About = () => {

    return (
        <React.Fragment>
            <Header
                headerNormalLogo={Logo}
                headerClass="ras-header ras-header-2"
            />

            <AboutMain />
            
            <Footer
                footerLogo={Logo}
                footerCTA='enable'
            />
        </React.Fragment>
    );
}

export default About;