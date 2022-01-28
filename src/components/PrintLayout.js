import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import PrintNav from './PrintNav';

const PrintLayout = ({children, language, printRef}) => {

    return ( 
        <>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="CV" />
                <meta name="author" content="Esteban Burgos" />
                <title>Esteban Burgos Developer</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" crossOrigin="anonymous"/>
            </Helmet>
            <PrintNav 
                language={language} 
                printRef={printRef}
            />
            <Footer />
        {children}
        </>
     );
}
 
export default PrintLayout;