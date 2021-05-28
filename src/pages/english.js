import React from 'react';
import Layout from '../components/Layout';

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
                   <h1>English</h1>
               </div>
        </Layout> 
     );
}
 
export default English;