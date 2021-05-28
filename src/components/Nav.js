import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';


const Nav = ({language}) => {

    // Consultar la foto de perfil
    const { profile } = useStaticQuery(graphql`
        query {
            profile: file(relativePath: {eq: "others/profile.jpg"}){
                publicURL
            }
        }
    `);

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">ESTEBAN BURGOS</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile.publicURL} alt="profile" />
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">{language.about}</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">{language.experience}</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">{language.education}</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">{language.skills}</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">{language.extras}</a></li>
                    <li><hr className="mb-3 mt-3"/></li>

                    { language.lang === 'es' ?
                    <>
                        <li className="nav-item"><a className="nav-link" rel="noreferrer" href="#" target="_blank"><small>Descargar CV</small></a></li> 
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
                        <li className="nav-item"><a className="nav-link" rel="noreferrer" href="#" target="_blank"><small>Download CV</small></a></li> 
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
 
export default Nav;