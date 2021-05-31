import React from 'react';

const ProjectItem = ({item}) => {
    return ( 
        <div className="card">
            <div className="d-flex justify-content-center align-items-center">
                <img className="card-img-top" src={item.image.localFile.childImageSharp.fluid.srcWebp} alt="project"/>
            <h3 className="card-title-custom text-center text-white">{item.title}</h3>
            </div>

            <div className="card-body">
                <p className="card-text">{item.description}</p>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
                <a className="mr-3" rel="noreferrer" href={item.demoUrl} target="_blank"><button className="btn btn-sm btn-light">Demo</button></a>
                <a className="mr-3" rel="noreferrer" href={item.backendRepo} target="_blank"><button className="btn btn-sm btn-light">Backend</button></a>
                <a className="mr-3" rel="noreferrer" href={item.frontendRepo} target="_blank"><button className="btn btn-sm btn-light">Frontend</button></a>
            </div>
        </div>
     );
}
 
export default ProjectItem;