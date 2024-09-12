import { useOutletContext } from "react-router-dom";

function Salt() {
  const freshness = useOutletContext();

  return (
    <>
      <h2>Salt</h2>
      <p>Freshness level: {freshness}</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY7lhx0SjPnVbVi_PaUXMPV63J-llGwRVJQ&s"
        width={400}
        height={400}
        alt="Salt on a wooden spoon"
      />
    </>
  );
}

export default Salt;
