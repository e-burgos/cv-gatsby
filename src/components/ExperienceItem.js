import React, { useState } from 'react';

const ExperienceItem = ({item}) => {

    const fullDescription = item.description;
    const shortDescription = item.description.substr(0,225) + " ...";
    const [description, setDescription] = useState(shortDescription);

    const showDescription = () => {
        if(description === shortDescription) {
            setDescription(fullDescription);
        } else {
            setDescription(shortDescription);
        }
    };

    return ( 
        <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
                <div className="date-outer">
                    <span className="date">
                        <span className="month">{item.language.language === 'en' ? item.timeJob.substr(0,7) : item.timeJob.substr(0,6)}</span>
                        <span className="year">{item.yearsJob}</span>
                    </span>
                </div>
            </div>
            <div className="timeline-content">
                <h3 className="mb-0">{item.position}</h3>
                {item.companyUrl !== null ? 
                    <a href={item.companyUrl} rel="noreferrer" target="_blank"><span className="subheading">{item.company}</span></a>
                : 
                    <div className="subheading">{item.company}</div>
                }
                {item.projects.length !== 0 ?
                    <div className="mb-2">
                    {item.language.language === "es" ? "Proyectos Relacionados: " : "Related Projects: "}    
                    {item.projects.map(project => (
                        <div key={project.id}><a href={project.demoUrl} rel="noreferrer" target="_blank">{project.title}  </a></div>
                    ))} 
                    </div>
                : null}
                <div className="mb-1">{item.startDate} – {item.endDate ? item.endDate : item.status} • {item.timeJob}</div>
                <div className="mb-3">{item.place}</div>
                <p>{description}</p>
                {description === shortDescription ?
                    <button type="button" className="btn btn-sm btn-light" onClick={() => showDescription()}>{item.language.language === "es" ? "Mostrar Más" : "Show More"}</button>
                :
                    <button type="button" className="btn btn-sm btn-light" onClick={() => showDescription()}>{item.language.language === "es" ? "Mostrar Menos" : "Show Less"}</button>
                }
            </div>
        </div>
     );
}
 
export default ExperienceItem;