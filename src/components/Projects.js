import React, {useState} from 'react';
import useProject from '../hooks/useProject';
import ProjectItem from './ProjectItem';

const Projects = ({language}) => {

    const categoriesProjects = useProject()
    console.log(categoriesProjects)

    const [projects, setProjects] = useState([])

    const filterCategory = projects => {
        setProjects(projects)
    }

    return ( 
        <section className="resume-section" id="projects">
            <div className="resume-section-content">
                <h2 className="mb-5">{language.projects}</h2>

                    {categoriesProjects.map(category => (
                        <button
                            onClick={() => filterCategory(category.projects)}
                            className="btn btn-light"
                        >{category.esName}</button>
                    ))}
                    
                    {projects.length !== 0 ?
                        (projects.map(project => (
                            <ProjectItem item={project} key={project.id}/>
                        )))
                    : null}
                
            </div>
        </section>
    );    
}
 
export default Projects;