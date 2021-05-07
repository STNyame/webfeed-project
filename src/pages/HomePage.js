import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/feed">
        <button>Go to Feed</button>
      </Link>
    </div>
  );
}
