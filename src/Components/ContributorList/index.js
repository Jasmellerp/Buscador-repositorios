
import React, { useEffect } from 'react';
import Card from '../ContributorList/Card'
import "../css/Style.css"

function ContributorList({ contributors = [] }) {
  useEffect(() => {
    console.log({ contributors })
  }, [])

  return (
    <div className="contributor-list">
      {contributors.length > 0 ?
        contributors.map((items) => (
          <Card key={items.id} className="topCards" items={items} />
        )) :
        <p>Loading...</p>
      }
    </div>
  )

}

export default ContributorList;
