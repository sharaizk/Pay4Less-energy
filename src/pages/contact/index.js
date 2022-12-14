import React from 'react';
import Header from '../../components/Header/HeaderStyleTwo';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import ContactMain from './ContactMain';
import ScrollToTop from '../../components/ScrollTop';

// Image
import Logo from '../../assets/images/logos/logo2.png';
import Logo2 from '../../assets/images/logos/logo1.png';



const Contact = () => {
    return (
        <React.Fragment>
            <Header
                headerNormalLogo={Logo2}
                headerClass="ras-header ras-header-2"
            />

            <Breadcrumb
                pageTitle="Contact"
            />

            <ContactMain />

            {/* scrolltop-start */}
            <ScrollToTop />
            {/* scrolltop-end */}

            <Footer
                footerLogo={Logo}
            />

        </React.Fragment>
    );
}


export default Contact;

