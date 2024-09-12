import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Explore our cooking wonderland</h1>
      <nav>
        <ul>
          <li>
            <Link to={"cooks"}>Many professional cooks</Link>
          </li>
          <li>
            <Link to={"ingredients"}>Freshest ingredients there are</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
