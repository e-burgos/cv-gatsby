import React from 'react';
import AboutItem from './AboutItem';
import useAbout from '../hooks/useAbout';

const About = ({language}) => {

    const abouts = useAbout();
    const data = abouts.filter( item => item.language.language === language.lang);

    return ( 
        <section className="resume-section" id="about">
           {data.map(item => (
               <AboutItem item={item} key={item.id}/>
           ))}
        </section>
     );
}
 
export default About;