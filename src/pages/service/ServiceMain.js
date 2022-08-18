import React from 'react';
import Service from './ServiceSection';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';


const ServiceMain = () => {

    return (
        <React.Fragment>
            {/* Breadcrumb Start */}
            <Breadcrumb 
                pageTitle="Service"
            />
            {/* Breadcrumb End */}

            {/* Service Start */}
            <Service />
			<ScrollToTop />
			{/* scrolltop-end */}

        </React.Fragment>
    )
}

export default ServiceMain;