import React from 'react';

const AboutItem = ({item}) => {
    return ( 
         <div className="resume-section-content">
            <div key={item.id}>
                <h1 className="mb-0">
                    {item.name}<span className="text-primary">{item.lastname}</span>
                </h1>
                <div className="subheading mb-5">
                    {item.address} · {item.phone} ·
                    <a href="mailto:info@estebanburgos.com.ar">{item.email}</a>
                </div>
                <p className="lead mb-5">{item.description}</p>
                <div className="social-icons">
                    <a className="social-icon" href={item.linkedin} rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href={item.github} rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>
     );
}
 
export default AboutItem;