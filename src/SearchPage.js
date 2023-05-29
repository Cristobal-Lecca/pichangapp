import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import cancha1 from "./cancha1.png"
import yape from "./yape.png"
import './SearchPage.css';

function SearchPage(props) {
  const [selectedDate, setSelectedDate] = useState('');

  function handleDateChange(momentDate) {
    setSelectedDate(momentDate.format('YYYY-MM-DD HH:mm:ss'));
  }

  return (
    <div className="image-description">
      <div class="child">
        <img src={cancha1} />
      </div>

      <div className="description" class="centered child">
        <h1>CANCHA COLOSO 1</h1>
        <h3>tu canchita del coloso</h3>
        <Datetime onChange={handleDateChange} />
        <img src={yape} class="bigger-image" />
        <div><button onClick={()=>(window.open("https://mpago.la/2u42oSD"))} class="my-button">Mercadopago</button></div>
        <div><button onClick={()=>(window.open("https://mpago.la/2u42oSD"))} class="button">Confirmar Reserva</button></div>
      </div>

    </div>
  );
}

export default SearchPage;
