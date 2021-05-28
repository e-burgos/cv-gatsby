import React from 'react';

const About = () => {
    return ( 
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Esteban<span className="text-primary">Burgos</span>
                </h1>
                <div className="subheading mb-5">
                    CABA, Buenos Aires, Argentina · (+54) 11 2679-0610 ·
                    <a href="mailto:info@estebanburgos.com.ar">info@estebanburgos.com.ar</a>
                </div>
                <p className="lead mb-5">Cuento con 12 años de experiencia en diferentes empresas tecnológicas, 
                orientado a la funcionalidad de soluciones tomando las ideas troncales de clientes para 
                ser materializadas en soluciones de software productivas y rentables. A lo largo de mi 
                carrera adquirí gran conocimiento en diferentes modelos de negocios aplicados a las 
                industrias de IT & Software. Mi experiencia se basó en variados roles permitiendo un 
                mix de habilidades en áreas técnicas, operativas, comerciales y gerenciales. 
                Personalmente me interesa el aprendizaje continuo de nuevas herramientas, negocios y 
                formas de trabajo. Me considero una persona organizada, detallista, autodidacta y resolutiva, mi deseo es trabajar 
                en proyectos que valoren la innovación continua en todos sus aspectos.</p>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/estebanburgos/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/e-burgos" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                </div>
            </div>
    </section>
     );
}
 
export default About;