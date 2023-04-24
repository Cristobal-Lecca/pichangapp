import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import cancha1 from "./cancha1.png"
import cancha2 from "./cancha2.png"
import cancha3 from "./cancha3.png"

// ES7 React snippets to do 'rfce'

function Home() {
  return (
    <div className="home">
      <Banner />

      
      <div className="home__section">
        <Card
          src={cancha1}
          title="Cancha deportiva : EL COLOSO 1"
          description="Horario de atencion 7:00 am - 12:00 am"
          price="60 lucas por hora"
        />
        <Card
          src={cancha2}
          title="Cancha deportiva : EL COLOSO 2"
          description="Horario de atencion 7:00 am - 12:00 am"
          price="60 lucas por hora"
        />
        <Card
          src={cancha3}
          title="Cancha deportiva : CHAMPIONS"
          description="Horario de atencion 8:30 am - 11:00 Pm"
          price="65 lucas por hora"
        />
      </div>
    </div>
  );
}

export default Home;
