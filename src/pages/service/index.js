import React from 'react';
import Header from '../../components/Header/HeaderStyleTwo';
import Footer from '../../components/Footer';
import ServiceMain from './ServiceMain';

// Image
import Logo from '../../assets/images/logos/logo2.png';
import Logo2 from '../../assets/images/logos/logo1.png';


const Service = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu = 'page'
                headerNormalLogo={Logo2}
                headerClass="ras-header ras-header-2"
            />

            {/* Service Main */}
            <ServiceMain />
            {/* Service Main */}
            
            <Footer
                footerLogo={Logo}
            />
        </React.Fragment>
    );
}

export default Service;