
import React from 'react'
import { Link } from "react-router-dom";

function Card({ items }) {


  return <div key={items.id} className="contCard">

    <hgroup>
      <a href={items.html_url} target='_blank' rel="noopener noreferrer">
        <h2><b>{items.name}</b></h2>
      </a>
      <h3>{items.language}</h3>
    </hgroup>

    <p>{items.description}</p>

    <Link to={("/contributors/" + items.full_name.replace('/', '|'))} >Top Contributors</Link>

    <div className="iconsBoostrap">
      <p className="bi bi-star"> {items.stargazers_count} </p>
      <p className="bi bi-pencil-square"> {items.open_issues_count} </p>
    </div>

  </div>

}

export default Card;
