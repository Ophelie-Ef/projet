import React from 'react';
import './ListMenu.css';
import Article from '../Article/Article';

const ListMenu = (props) => {
  return (
    <ul className="ListMenu">
      {
        props.sendEntries.map((value, index) => {
          return (
            <li // Un event ne peux pas être directement conditionné
              onClick={
                value.entry === "Article" ? onClick = () => alert("Lorem ipsum !!!") : ""
              }
              key={index} >{value.entry}</li>
          )
          console.dir(value);
        })
      }
    </ul>
  )
};

export default ListMenu;
