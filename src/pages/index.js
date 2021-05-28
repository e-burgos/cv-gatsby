import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Courses from '../components/Courses';

const Index = () => {

     const language = {
        about: 'sobre mí',
        experience: 'experiencia',
        education: 'educación',
        skills: 'habilidades',
        extras: 'extras',
        lang: 'es'
    };

     return (
        <Layout
          language={language}
        >
               <div className="container-fluid p-0">
                    <About />
                    <hr className="m-0" />
                    <Experiences />
                    <hr className="m-0" />
                    <Education />
                    <hr className="m-0" />
                    <Skills />
                    <hr className="m-0" />
                    <Courses />
                    <hr className="m-0" />
               </div>
        </Layout> 
     );
}
 
export default Index;