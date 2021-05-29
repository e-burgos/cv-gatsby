import React from 'react';

const EducationItem = ({item}) => {
    return ( 
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">{item.institution}</h3>
                <div className="subheading">{item.degree}</div>
                <div className="mb-3">
                    <span><a href={item.infoUrl} rel="noreferrer" target="_blank">{item.language.language === "es" ? "Información del Curso" : "Course Information"}</a></span>
                    {item.certificateUrl !== "" || null ?
                    <span><a href={item.certificateUrl} rel="noreferrer" target="_blank"> • {item.language.language === "es" ? "Certificado" : "Certification"}</a></span>
                    : null} 
                </div>
                <p>{item.description}</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">{item.startDate} - {item.endDate !== null || "" ? item.endDate : (item.language.language === "es" ? "En curso" : "In Progress")}</span></div>
        </div>
     );
}
 
export default EducationItem;

