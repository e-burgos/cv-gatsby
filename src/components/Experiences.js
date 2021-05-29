import React from 'react';
import ExperienceItem from './ExperienceItem';
import useExperience from '../hooks/useExperience';

const Experiences = ({language}) => {

    const experiences = useExperience();
    const filter = experiences.filter(item => item.language.language === language.lang);
    const data = filter.reverse();

    return ( 
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">{language.experience}</h2>
                <div className="main-timeline">
                    {data.map(item => (
                        <ExperienceItem item={item} key={item.id} />
                    ))}
                </div>   
            </div>
        </section>
     );
}
 
export default Experiences;