import React, {useState} from 'react';

const SkillsItem = ({item}) => {

    const [itemName, setItemName] = useState("");

    const showName = () => {
        setItemName(item.name);
    }

    const hideName = () => {
        setItemName("");
    }

    return ( 
        <li className="list-inline-item">
            <button
                onMouseOver={() => showName()}
                onFocus={() => showName()}
                onMouseLeave={() => hideName()}
                className="btn btn-light button-skill"
                type="button"
            >
                <img  
                className="rounded-circle" 
                width="55px" 
                height="55px" 
                src={item.image.localFile.publicURL} data-toggle="tooltip" 
                data-placement="top" 
                title={item.name} 
                alt={item.name} />
                {itemName !== "" ?
                <>
                <br/><a href={item.url} rel="noreferrer" target="_blank"><small className="text-skill">{item.name}</small></a>
                </>
            : null}
            </button>
        </li>
     );
}
 
export default SkillsItem;