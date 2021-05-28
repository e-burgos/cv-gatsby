import React from 'react';
import SkillsItem from './SkillsItem';

const Skills = () => {
    return ( 
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Habilidades</h2>
                <div className="subheading mb-3">Leguajes, herramientas y frameworks de programación</div>
                <ul className="list-inline dev-icons">
                    <SkillsItem />
                    <SkillsItem />
                    <SkillsItem />
                </ul>
            </div>
        </section>
     );
}
 
export default Skills;