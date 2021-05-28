import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experiences = () => {
    return ( 
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experiencia</h2>
                <div className="main-timeline">
                    <ExperienceItem />
                    <ExperienceItem />
                </div>   
            </div>
        </section>
     );
}
 
export default Experiences;