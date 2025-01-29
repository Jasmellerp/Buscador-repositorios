
import React from "react";

function Card({ items }) {

    return (
        <div className="contributor-card">
            <img src={items.avatar_url} alt="avatar" className="avatar" />
            <a href={items.html_url} target='_blank' rel="noopener noreferrer"><h3 className="titleContributors">{items.login}</h3> </a>
            <p className="titleContributors">({items.contributions} Contributions)</p>
        </div>
    )
}

export default Card;
