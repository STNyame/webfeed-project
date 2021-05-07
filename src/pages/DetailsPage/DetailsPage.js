import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./DetailsPage.css";

export default function DetailsPage() {
  const queryParam = useParams();
  const [beer, setBeer] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.punkapi.com/v2/beers/${queryParam.id}`
      );
      setBeer(res.data);
    };
    fetchData();
  });

  return (
    <div>
      {!beer && <p>Loading...</p>}
      {beer ? (
        <div className="container">
          <div className="item-div">
            <h1 className="title">{beer[0].name}</h1>
            <h2>{beer[0].tagline}</h2>
            <p>{beer[0].description}</p>
            <p>
              <strong>
                <em>Brewers tips! :</em>
              </strong>
              {beer[0].brewers_tips}
            </p>
          </div>
          <div className="item-div">
            <img className="beer-img" src={beer[0].image_url} alt="" />
          </div>

          <div className="item-list">
            <h4>Ingredients:</h4>
            <ul>
              <li>
                <h5>Hops:</h5>
                <ul>
                  {beer[0].ingredients.hops.map((current, i) => {
                    return <li key={i}>{current.name}</li>;
                  })}
                </ul>
              </li>
              <li>
                <h5>Malt:</h5>
                <ul>
                  {beer[0].ingredients.malt.map((current, i) => {
                    return <li key={i}>{current.name}</li>;
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
