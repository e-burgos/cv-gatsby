import React from 'react';
import { Link } from 'gatsby';

const MobileMenu = ({language, showMobileMenu}) => {
    return ( 
        <nav className="navbar-dark bg-primary fixed-top h-100">
            <div className="d-flex justify-content-between align-items-center mobile-item mr-3 ml-3 mt-2 mb-2">
                <span className="d-block navbar-brand">ESTEBAN BURGOS</span>
                <button
                    onClick={() => showMobileMenu()} 
                    className="navbar-toggler" 
                    type="button"
                ><span className="navbar-toggler-icon"></span></button>
            </div>
            <div className="d-flex justify-content-center align-items-center h-100">
                <ul className="navbar-nav">
                    <li className="nav-item mobile-item"><a onClick={() => showMobileMenu()} className="nav-link" href="#about">{language.about}</a></li>
                    <li className="nav-item mobile-item"><a onClick={() => showMobileMenu()} className="nav-link mobile-item" href="#experience">{language.experience}</a></li>
                    <li className="nav-item mobile-item"><a onClick={() => showMobileMenu()} className="nav-link" href="#education">{language.education}</a></li>
                    <li className="nav-item mobile-item"><a onClick={() => showMobileMenu()} className="nav-link" href="#skills">{language.skills}</a></li>
                    <li className="nav-item mobile-item"><a onClick={() => showMobileMenu()} className="nav-link" href="#awards">{language.extrasMenu}</a></li>
                    <li className="nav-item mobile-item"><a onClick={() => showMobileMenu()} className="nav-link" href="#projects">{language.projects}</a></li>
                    <li className="w-100"><hr className="mb-3 mt-3"/></li>

                    { language.lang === 'es' ?
                    <>
                        <li className="nav-item mobile-item"><a className="nav-link" rel="noreferrer" href="https://drive.google.com/file/d/1FqCMt0GLPRdhrhgz4KBl-D3nbsK6yLZ8/view?usp=sharing" target="_blank"><small>Descargar CV</small></a></li> 
                        <li className="nav-item mobile-item">
                            <Link
                                to={'/english'}
                                className="nav-link"
                            ><small>English Version</small></Link>
                        </li>
                    </>
                    : null }

                    { language.lang === 'en' ?
                    <>
                        <li className="nav-item mobile-item"><a className="nav-link" rel="noreferrer" href="https://drive.google.com/file/d/1FqCMt0GLPRdhrhgz4KBl-D3nbsK6yLZ8/view?usp=sharing" target="_blank"><small>Download CV</small></a></li> 
                        <li className="nav-item mobile-item">
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
 
export default MobileMenu;