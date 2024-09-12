import { Link } from "react-router-dom";

function Cooks() {
  const cookNames = ["James", "John", "Boba", "Juulz", "Biberty"];
  return (
    <>
      <h1>Marvelous masters of their craft.</h1>
      <div>
        {cookNames.map((cookName) => {
          return (
            <>
              <h3>
                Very cool cook <Link to={cookName}>{cookName}</Link>
              </h3>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cooks;
