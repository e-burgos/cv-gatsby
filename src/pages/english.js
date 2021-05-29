import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Courses from '../components/Courses';
import Projects from '../components/Projects';

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

    return ( 
        <Layout
            language={language}
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
     );
}
 
export default English;