import React from 'react';

const Footer = () => {
    const date = new Date();
    return ( 
        <footer className="footer">
            <p className="text-footer">© {date.getFullYear()} Esteban Burgos - Powered by GatsbyJS / Strapi Headless CMS</p>
        </footer>
     );
}
 
export default Footer;