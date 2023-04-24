import React, { useState } from "react";
import Search from "./Search";
import "./Banner.css";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      
      <div className="banner__info">
        <h1>¡Reserva tu canchita ahora!</h1>
        <h5>
          Elige la fecha y hora y reserva una de nuestras canchas disponibles
        </h5>
        <button onClick={() => history.push('/search')}>Explore Nearby</button>
      </div>
    </div>
  );
}

export default Banner;
