import React, {useRef} from 'react';
import PrintLayout from '../components/PrintLayout';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Courses from '../components/Courses';
import Projects from '../components/Projects';

const CvSpanish = () => {

     const printRef = useRef();
     const language = {
          about: 'Sobre mí',
          experience: 'Experiencia',
          education: 'Educación',
          skills: 'Habilidades',
          extrasMenu: 'Cursos',
          extras: 'Cursos & Certificaciones',
          projects: 'Proyectos',
          lang: 'es'
     };

     return (
          <PrintLayout language={language} printRef={printRef}>
               <div className="container-fluid p-0" ref={printRef}>
                    <About language={language} />
                    <hr className="m-0" />
                    <Experiences isCV={true} language={language}/>
                    <hr className="m-0" />
                    <Education isCV={true} language={language}/>
                    <hr className="m-0" />
                    <Skills language={language}/>
                    <hr className="m-0" />
                    <Courses language={language}/>
                    <hr className="m-0" />
                    <Projects isCV={true} language={language}/>
                    <hr className="m-0" />
               </div>
          </PrintLayout> 
     );
}
 
export default CvSpanish;