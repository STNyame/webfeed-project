import axios from "axios";
import { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard/BeerCard";
import "../components/BeerCard/BeerCard.css";

export default function FeedPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://api.punkapi.com/v2/beers`);

      setData(res.data);
    };
    fetchData();
    console.log(data);
  }, []);
  return (
    <div>
      <h1>Im feedpage!</h1>
      <div className="beer-container">
        {data.length > 0 &&
          data.map((beer) => {
            return (
              <div className="beer-item">
                <BeerCard title={beer.name} img={beer.image_url} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
