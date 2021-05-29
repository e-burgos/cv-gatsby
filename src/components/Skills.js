import React from 'react';
import SkillsItem from './SkillsItem';
import useSkills from '../hooks/useSkill'

const Skills = ({language}) => {

    const skillCategories = useSkills();

    return ( 
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">{language.skills}</h2>
                {skillCategories.map(category => (
                <div key={category.id}>
                    <div className="subheading mb-3">{language.lang === "es" ? category.esName : category.enName}</div>
                    <ul className="list-inline dev-icons">
                        {category.skills.map(skill => (
                            <SkillsItem item={skill} key={skill.id}/>
                        ))}
                    </ul>
                </div>
                ))}
                

            </div>
        </section>
     );
}
 
export default Skills;