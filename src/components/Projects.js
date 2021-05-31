import React, {useState} from 'react';
import useCategoriesProject from '../hooks/useCategoriesProject';
import useProject from '../hooks/useProject';
import ProjectItem from './ProjectItem';

const Projects = ({language}) => {

    // Hooks
    const allCategoriesProjects = useCategoriesProject();
    const allProjects = useProject();

    // Filter language
    const categoriesProjects = allCategoriesProjects.filter(category => category.language.language === language.lang && category.projects.length !== 0);
    const filterProjects = allProjects.filter(project => project.language.language === language.lang);

    // State
    const [projects, setProjects] = useState(filterProjects)

    const filterCategory = projects => {
        setProjects(projects)
    }
    
    const loadProjects = () => {
        setProjects(filterProjects);
    }

    //console.log(categoriesProjects)

    return ( 
        <section className="resume-section" id="projects">
            <div className="resume-section-content">
            {projects.length !== 0 ? (
            <>   
                <h2 className="mb-3">{language.projects}</h2>
                {categoriesProjects.map(category => (
                    <button
                        key={category.id}
                        onClick={() => filterCategory(category.projects)}
                        className="btn btn-light mr-2"
                    >
                        <span className="badge badge-pill badge-dark">{category.projects.length}</span> {category.esName}
                    </button>
                ))}
                    
                <button
                    onClick={() => loadProjects()}
                    className="btn btn-dark"
                ><span className="badge badge-pill badge-light">{filterProjects.length}</span> {language.lang === "es" ? "Todos" : "All Projects"}</button>
                
                <div className="card-columns mt-3">
                
                    {projects.map(project => (
                        <ProjectItem item={project} key={project.id}/>
                    ))}
                </div>
            </>
            ) : (
                <h2 className="mb-3">{language.lang === "es" ? "Aún no hay proyectos cargados" : "There are no projects uploaded for this language yet"}</h2>
            )}
                
            </div>
        </section>
    );    
}
 
export default Projects;