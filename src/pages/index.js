import React, {useState} from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Courses from '../components/Courses';
import Projects from '../components/Projects';
import MobileMenu from '../components/MobileMenu';

const Index = () => {

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

     // state del menu mobile
     const [menu, setMenu] = useState(false)


    // Mostrando menu mobile
    const showMobileMenu = () => {
        if(menu === false){
          setMenu(true);
        } else {
          setMenu(false);
        }
    }

     return (
          <>
          {!menu ?  
               <Layout
                    language={language}
                    showMobileMenu={showMobileMenu}
               >
               <div className="container-fluid p-0">
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
 
export default Index;