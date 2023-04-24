import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import cancha1 from "./cancha1.png"
import './SearchPage.css';

function SearchPage(props) {
  const [selectedDate, setSelectedDate] = useState('');

  function handleDateChange(momentDate) {
    setSelectedDate(momentDate.format('YYYY-MM-DD HH:mm:ss'));
  }

  return (
    <div className="image-description">
      <img src={cancha1} />
      <div className="description">
        <h2>CANCHA COLOSO 1</h2>
        <p>tu canchita del coloso</p>
        <Datetime onChange={handleDateChange} />
        
        <button onClick={()=>(window.open("https://mpago.la/2u42oSD"))} class="my-button">Link de pago</button>

      </div>
    </div>
  );
}

export default SearchPage;
