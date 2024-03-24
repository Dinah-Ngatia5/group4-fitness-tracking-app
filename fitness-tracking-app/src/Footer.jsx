import React from 'react';
import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();

  const goToSlides = () => {
    history.push("/slides");
  };

  return (
    <div className="footer">
      <button onClick={goToSlides}>Go to Slides</button>
    </div>
  );
}


export default Footer;