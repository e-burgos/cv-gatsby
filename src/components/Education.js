import React from 'react';
import EducationItem from './EducationItem';

const Education = () => {
    return ( 
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Educación</h2>
                <EducationItem />
                <EducationItem />
            </div>
        </section>    
     );
}
 
export default Education;