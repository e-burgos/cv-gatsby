import React, {useRef} from 'react';
import PrintLayout from '../components/PrintLayout';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Courses from '../components/Courses';
import Projects from '../components/Projects';

const CvEnglish = () => {

     const printRef = useRef();
     const language = {
          about: 'About Me',
          experience: 'Experience',
          education: 'Education',
          skills: 'Skills',
          extrasMenu: 'Courses',
          extras: 'Courses & Certificates',
          projects: 'Projects',
          lang: 'en'
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
 
export default CvEnglish;