import React from 'react';

const ProjectItem = ({item, language}) => {

    //const image = item.image.localFile.childImageSharp.fluid.srcWebp;

    return ( 
        <div className="card">
            <div className="d-flex justify-content-center align-items-center">
                {item.image !== null ?
                    <img className="card-img-top" width="600" src={item.image.localFile.childImageSharp.fluid.srcWebp} alt="project"/>
                : 
                    <img className="card-img-top" width="600" height="180" src="https://media.istockphoto.com/photos/gloomy-wall-background-black-texture-cement-surface-picture-id639935148?k=6&m=639935148&s=170667a&w=0&h=rcZgdrXC8SmnFtwQrfxwIE0McuGX8-9wWXSkT7UMy1Y=" alt="project"/>
                }
                
            <h3 className="card-title-custom text-center text-white">{item.title}</h3>
            </div>

            <div className="card-body">
                <p className="card-text">{language.lang === 'es' ? item.descriptionEs : item.descriptionEn}</p>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
                <a className="mr-3" rel="noreferrer" href={item.demoUrl} target="_blank"><button className="btn btn-sm btn-light">Demo</button></a>
                {item.access ? 
                <>
                {item.backendRepo !== null ?
                    <a className="mr-3" rel="noreferrer" href={item.backendRepo} target="_blank"><button className="btn btn-sm btn-light">Backend</button></a>
                : null}
                {item.frontendRepo !== null ?
                <a className="mr-3" rel="noreferrer" href={item.frontendRepo} target="_blank"><button className="btn btn-sm btn-light">Frontend</button></a>
                : null}
                <span className="badge badge-pill badge-success">{language.lang === 'es' ? 'Público' : 'Public'}</span>
                </>
                :
                <span className="badge badge-pill badge-danger">{language.lang === 'es' ? 'Restringido: solicitar acceso' : 'Restricted: request access'}</span>
                }
            </div>
        </div>
     );
}
 
export default ProjectItem;