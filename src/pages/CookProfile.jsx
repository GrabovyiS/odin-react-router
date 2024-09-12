import { useParams } from "react-router-dom";

function CookProfile() {
  const { cookName } = useParams();

  return (
    <>
      <p>Our very own cook. Behold, </p>
      <h1>Mr. {cookName} Cookman!</h1>
    </>
  );
}

export default CookProfile;
