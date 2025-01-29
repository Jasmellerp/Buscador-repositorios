
import React, { useEffect, useState } from "react";
import "../css/Style.css";
import Card from './Card'
import { getRepositoriesByLanguage } from '../../Api'


function CardList({ repo }) {


  const [repositories, setRepositories] = useState({});
  const [saverepo, setSaverepo] = useState({
    pageNumber: 6,
    language: repo
  });

  useEffect(() => {
    getRepositoriesByLanguage(saverepo)
      .then(data => {
        setRepositories(data)
      });
  }, [saverepo]);

  const handleClick = (e) => {
    e.preventDefault();
    setSaverepo({
      ...saverepo,
      pageNumber: saverepo.pageNumber + 6,

    })

    const cv = getRepositoriesByLanguage(saverepo);
    setRepositories({
      ...repositories,
      ...cv
    });
  }

  return (
    <div className="cardList">
      {repositories.items ?
        repositories.items.map((items) => (
          <Card key={items.id} className="contCard" items={items} />
        )) :
        <p>Loading...</p>
      }
      <button className="footer-button" onClick={handleClick}>load more</button>
    </div>
  )
}

export default CardList;
