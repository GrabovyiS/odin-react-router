import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Ingredients() {
  const freshnessLevel = "fresh";

  return (
    <>
      <h1>Browse our wondrous produce</h1>
      <ul>
        <li>
          <Link to={"spinach"}>Spinach</Link>
        </li>
        <li>
          <Link to={"salt"}>Salt</Link>
        </li>
        <li>
          <Link to={"bel-pepper"}>BelPepper</Link>
        </li>
      </ul>
      <Outlet context={freshnessLevel} />
    </>
  );
}

export default Ingredients;
