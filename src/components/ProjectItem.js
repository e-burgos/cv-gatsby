import React from 'react';

const ProjectItem = ({item, language}) => {
    return ( 
        <div className="card">
            <div className="d-flex justify-content-center align-items-center">
                <img className="card-img-top" src={item.image.localFile.childImageSharp.fluid.srcWebp} alt="project"/>
            <h3 className="card-title-custom text-center text-white">{item.title}</h3>
            </div>

            <div className="card-body">
                <p className="card-text">{language.lang === 'es' ? item.descriptionEs : item.descriptionEn}</p>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
                <a className="mr-3" rel="noreferrer" href={item.demoUrl} target="_blank"><button className="btn btn-sm btn-light">Demo</button></a>
                {item.access ? 
                <>
                <a className="mr-3" rel="noreferrer" href={item.backendRepo} target="_blank"><button className="btn btn-sm btn-light">Backend</button></a>
                <a className="mr-3" rel="noreferrer" href={item.frontendRepo} target="_blank"><button className="btn btn-sm btn-light">Frontend</button></a>
                <span className="badge badge-pill badge-success">{language.lang === 'es' ? 'Público' : 'Public'}</span>
                </>
                :
                <span className="badge badge-pill badge-success">{language.lang === 'es' ? 'Restringido: solicitar acceso' : 'Restricted: request access'}</span>
                }
            </div>
        </div>
     );
}
 
export default ProjectItem;