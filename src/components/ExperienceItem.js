import React from 'react';

const ExperienceItem = () => {
    return ( 
        <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
                <div className="date-outer">
                    <span className="date">
                        <span className="month">Actualidad</span>
                        <span className="year">2021</span>
                    </span>
                </div>
            </div>
            <div className="timeline-content">
                <h3 className="mb-0">Desarrollador Web Full Stack</h3>
                <div className="subheading">Profesional Independiente</div>
                <div><a href="https://github.com/e-burgos" rel="noreferrer" target="_blank">Github</a></div>
                <div className="mb-3">ene 2020 – actualidad • Buenos Aires, Argentina</div>
                <p>Mi trabajo se centra en el desarrollo de aplicaciones webs robustas, ordenadas y seguras de acuerdo al uso de las buenas
                practicas actuales. Tengo experiencia en diferentes tecnologías tanto de backend como frontend trabajando a diario con
                JavaScript, HTML, CSS, NodeJs, ExpressJs y ReactJs. En todos mis proyectos incorporo Restful Web Service y utilizo
                diferentes DBs como MongoDB, MySQL, Firebase con sus respectivos OMRs, según lo requiera el proyecto.
                Estoy familiarizado con otras tecnologías como ser JWT, AWS, Bootstrap4, Tailwind CSS, Sequelizejs, Mongoose, EJS,
                RubyOnRails, Wordpress, entre otras.
                Me agrada hacer deployment mis proyectos en plataformas de servicio como Heroku, Netlity o Vercel para una correcta
                prueba.
                Para mí, la comunicación es muy importante, tanto en el código como en el equipo de trabajo, para ello me siento muy
                cómodo usando GIT a diario y herramientas que comuniquen y organicen rápidamente como Trello, Slack, Discord o G-Suite.
                Particularmente me interesan mucho más los proyectos que requieran resolver problemas desafiantes, pienso que es la
                mejor manera de obtener nuevos conocimientos en el día a día y sentir la satisfacción de resolver impedimentos que te
                ponen a prueba.
                </p>
            </div>
        </div>
     );
}
 
export default ExperienceItem;