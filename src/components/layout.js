import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({children, language}) => {
    return ( 
        <>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="CV" />
                <meta name="author" content="Esteban Burgos" />
                <title>Esteban Burgos Developer</title>
                <link rel="icon" type="image/x-icon" href="/others/favicon.ico" />
                <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
                <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
            </Helmet>
            <Nav language={language} />
            <Footer />
        {children}
        </>
     );
}
 
export default Layout;