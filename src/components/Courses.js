import React from 'react';
import CourseItem from './CourseItem';

const Courses = () => {
    return ( 
        <section className="resume-section" id="awards">
            <div className="resume-section-content">
                <h2 className="mb-5">Cursos, Certificados y logros</h2>
                <ul className="fa-ul mb-0">
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                </ul>
            </div>
        </section>
     );
}
 
export default Courses;