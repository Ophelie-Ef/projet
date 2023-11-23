import React from 'react';
import './ListMenu.css';

const ListMenu = (props) => {
  return (
    <ul className="ListMenu">
      {
        props.sendEntries.map((value, index)=>{
          return(
            <a key={index} href={value.url}>
            <li>{value.entry}</li>
            </a>
          )
          console.dir(value);
        })
      }
    </ul>
  )
};

export default ListMenu;
