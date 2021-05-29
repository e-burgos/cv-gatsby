import React from 'react';

const CourseItem = ({item}) => {
    return ( 
        <li className="mb-2">
            <a href={item.urlcourse} rel="noreferrer" target="_blank">
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
            </a> {item.degree} <br/>
            <small className="text-uppercase">{item.institution} - {item.date}</small>
        </li>
     );
}
 
export default CourseItem;