import React from 'react';
import EducationItem from './EducationItem';
import useEducation from '../hooks/useEducation';

const Education = ({language}) => {

    const educations = useEducation();
    const filter = educations.filter(item => item.language.language === language.lang);
    const data = filter.reverse();

    return ( 
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">{language.education}</h2>
                {data.map(item => (
                    <EducationItem item={item} key={item.id}/>
                ))}
            </div>
        </section>    
     );
}
 
export default Education;