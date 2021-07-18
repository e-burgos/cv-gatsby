import React from 'react';

const Footer = () => {
    const date = new Date();
    return ( 
        <footer className="footer">
            <p className="text-footer">© {date.getFullYear()} - Powered by GatsbyJS / Strapi HeadlessCMS</p>
        </footer>
     );
}
 
export default Footer;