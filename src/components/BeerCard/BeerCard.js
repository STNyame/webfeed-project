import { Link } from "react-router-dom";
import "./BeerCard.css";
export default function BeerCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <Link to={`/details/${parseInt(props.id)}`}>
        <img style={{ margin: 0 }} src={props.img} alt="" />
      </Link>
      <div>
        <button>like</button>
      </div>
    </div>
  );
}
