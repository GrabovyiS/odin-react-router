import { useOutletContext } from "react-router-dom";

function BelPepper() {
  const freshness = useOutletContext();

  return (
    <>
      <h2>Bel Pepper</h2>
      <p>Freshness level: {freshness}</p>
      <img
        src="https://www.chilipeppermadness.com/wp-content/uploads/2024/02/Bell-Peppers1.jpg"
        width={400}
        height={400}
        alt="Bel Pepper"
      />
    </>
  );
}

export default BelPepper;
