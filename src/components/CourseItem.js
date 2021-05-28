import React from 'react';

const CourseItem = ({item}) => {
    return ( 
        <li className="mb-2">
            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
            {item.degree}<br/>
            <small className="text-uppercase">{item.institution} - {item.date}</small>
        </li>
     );
}
 
export default CourseItem;