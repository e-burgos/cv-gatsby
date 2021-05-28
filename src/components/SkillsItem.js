import React from 'react';

const SkillsItem = () => {
    return ( 
        <li className="list-inline-item">
            <img className="rounded-circle mx-auto" width="55px" height="55px" src="/images/tech-icons/030-html-5.svg" data-toggle="tooltip" data-placement="top" title="HTML5" alt="HTML5" />
            <small className="text-skill">HTML5</small>
        </li>
     );
}
 
export default SkillsItem;