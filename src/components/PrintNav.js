import React from 'react';
import { Link } from 'gatsby';
import pdfDownload from '../images/others/pdf-download.png';
import ReactToPrint from 'react-to-print';

const PrintNav = ({language, printRef}) => {

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link
                to={language.lang === 'es' ? '/' : '/english'}
                className="navbar-brand js-scroll-trigger"
            ><span className="d-block d-lg-none">{language.lang === 'es' ? 'VOLVER' : 'BACK'}</span>
            </Link>
            
            <ReactToPrint
                trigger={() => 
                <img 
                    className="pointer-effect navbar-toggler d-lg-none img-fluid " 
                    width="75px" 
                    src={pdfDownload} 
                    alt="pdf-download" 
                />}
                content={() => printRef.current}
                pageStyle={{ marginBotton: "100px", padding: "75px" }}
            />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <ReactToPrint
                            trigger={() => 
                            <img 
                                className="pointer-effect img-fluid mx-auto mb-2" 
                                width="140px" 
                                src={pdfDownload} 
                                alt="pdf-download" 
                            />}
                            content={() => printRef.current}
                            pageStyle={{ marginBotton: "100px", padding: "75px" }}
                        />
                    </li>
                    <li><hr className="mb-3 mt-3"/></li>

                    { language.lang === 'es' ?
                    <>
                        <li className="nav-item">
                            <Link
                                to={'/'}
                                className="nav-link"
                            ><small>Volver</small></Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={'/english'}
                                className="nav-link"
                            ><small>English Version</small></Link>
                        </li>
                    </>
                    : null }

                    { language.lang === 'en' ?
                    <>
                        <li className="nav-item">
                            <Link
                                to={'/english'}
                                className="nav-link"
                            ><small>Back</small></Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={'/'}
                                className="nav-link"
                            ><small>Spanish Version</small></Link>
                        </li>
                    </>
                    : null }
                </ul>
            </div>
        </nav>
     );
}
 
export default PrintNav;