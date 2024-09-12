import { useOutletContext } from "react-router-dom";

function Spinach() {
  const freshness = useOutletContext();

  return (
    <>
      <h2>Spinach</h2>
      <p>Freshness level: {freshness}</p>
      <img
        src="https://klopotenko.com/wp-content/uploads/2018/05/Shpinat-s-limonom-i-chesnokom_siteWeb.jpg"
        width={400}
        height={400}
        alt="Cooked spinach"
      />
    </>
  );
}

export default Spinach;
