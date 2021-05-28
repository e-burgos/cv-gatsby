import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Courses from '../components/Courses';

const English = () => {

    const language = {
        about: 'about me',
        experience: 'experience',
        education: 'education',
        skills: 'skills',
        extras: 'extras',
        lang: 'en'
    };

    return ( 
        <Layout
            language={language}
        >
               <div className="container-fluid p-0">
                    <About language={language.lang} />
                    <hr className="m-0" />
                    <Experiences language={language.lang}/>
                    <hr className="m-0" />
                    <Education language={language.lang}/>
                    <hr className="m-0" />
                    <Skills language={language.lang}/>
                    <hr className="m-0" />
                    <Courses language={language.lang}/>
                    <hr className="m-0" />
               </div>
        </Layout> 
     );
}
 
export default English;