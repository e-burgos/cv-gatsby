import React, {useState, useRef} from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Courses from '../components/Courses';
import Projects from '../components/Projects';
import MobileMenu from '../components/MobileMenu';

const English = () => {

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

     const [menu, setMenu] = useState(false)

     const showMobileMenu = () => {
          if(menu === false){
               setMenu(true);
          } else {
               setMenu(false);
          }
     }

     const printRef = useRef();

     return (
          <>
          {!menu ?  
               <Layout
                    language={language}
                    showMobileMenu={showMobileMenu}
                    printRef={printRef}
               >
               <div className="container-fluid p-0" ref={printRef}>
                    <About language={language} />
                    <hr className="m-0" />
                    <Experiences language={language}/>
                    <hr className="m-0" />
                    <Education language={language}/>
                    <hr className="m-0" />
                    <Skills language={language}/>
                    <hr className="m-0" />
                    <Courses language={language}/>
                    <hr className="m-0" />
                    <Projects language={language}/>
                    <hr className="m-0" />
               </div>
               </Layout> 
          : 
               <MobileMenu 
                    language={language}
                    showMobileMenu={showMobileMenu} 
               />
          } 
          </>
     );
}
 
export default English;