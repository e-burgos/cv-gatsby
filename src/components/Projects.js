import React, {useState} from 'react';
import useCategoriesProject from '../hooks/useCategoriesProject';
import useProject from '../hooks/useProject';
import ProjectItem from './ProjectItem';

const Projects = ({language}) => {

    // Hooks
    const allCategoriesProjects = useCategoriesProject();
    const filterProjects = useProject();

    // Filter con proyectos
    const categoriesProjects = allCategoriesProjects.filter(category => category.projects.length !== 0);

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
                        className="btn btn-light mr-2 mb-2"
                    >
                        <span className="badge badge-pill badge-dark">{category.projects.length}</span> {language.lang === "es" ? category.esName : category.enName}
                    </button>
                ))}
                    
                <button
                    onClick={() => loadProjects()}
                    className="btn btn-dark mb-2"
                ><span className="badge badge-pill badge-light">{filterProjects.length}</span> {language.lang === "es" ? "Todos" : "All Projects"}</button>
                
                <div className="card-columns mt-3">
                
                    {projects.map(project => (
                        <ProjectItem item={project} key={project.id} language={language}/>
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