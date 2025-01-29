
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ContributorList from '../Components/ContributorList'
import { getTopContributors } from "../Api";

function Topcontributors() {
  const params = useParams()
  const [contributors, setContributors] = useState({});
  const [savecon, setCon] = useState({
    fullname: params.fullname.replace('|', '/'),
    numberPage: 10
  });

  useEffect(() => {
    console.log(params.fullname.replace('|', '/'));
    getTopContributors(savecon)
      .then(data => {
        //console.log(data)
        setContributors(data)
      });
  }, [savecon]);

  const handleClick = async (e) => {
    e.preventDefault();
    setCon({
      ...savecon,
      numberPage: savecon.numberPage + 5

    })
    console.log(...contributors)
    const cv = await getTopContributors(savecon);
    setContributors(...contributors, cv);
  }

  return (
    <div className="contributor-top">
      <h1>Top Contributors</h1>
      <ContributorList contributors={contributors} className="contributor-list" />

      <button className="footer-button" onClick={handleClick} >load more</button>

    </div>
  )
}

export default Topcontributors;
