import React from 'react';
import CourseItem from './CourseItem';
import useCourse from '../hooks/useCourse';

const Courses = ({language}) => {

    const courses = useCourse()
    const data = courses.filter(item => item.language.language === language.lang)

    return ( 
        <section className="resume-section" id="awards">
            <div className="resume-section-content">
                <h2 className="mb-5">{language.extras}</h2>
                <ul className="fa-ul mb-0">
                    {data.map(item => (
                        <CourseItem item={item} key={item.id}/>
                    ))}
                </ul>
            </div>
        </section>
     );
}
 
export default Courses;