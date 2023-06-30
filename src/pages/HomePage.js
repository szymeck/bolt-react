import React from "react";
import './HomePage.css';
export default function HomePage() {
return (
  <div>
    <nav>
        <div className="nav-top">

        </div>
        <div className="nav-bottom">
        <div className="logo"><img src="/bolt-logo.svg" alt="logo"></img></div>
        <ul className="links">
        <li className="link">Produkty</li>
        <li className="link">Zostań partnerem Bolt</li>
        <li className="link">O nas</li>
        <li className="link"> Pomoc</li>
        <li className="link">Bezpieczeństwo</li>
        <li className="link">Miasta</li>
        </ul>
        </div>
    </nav>
   
   <main>
    <div className="hero" style={{
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
        <div className="hero-container">
        <div className="hero-text">
            <h1>
            Jeździsz dokąd chcesz, kiedy chcesz
            </h1>
            <p>
            Bolt to superaplikacja oferująca usługi w zakresie mobilności. Możesz ruszyć w trasę z kierowcą w kilka minut i wygodnie dojechać do celu. A jeżeli nie chcesz stać w korkach, wybierz hulajnogi elektryczne, na których szybko przejedziesz przez miasto.
            </p>
            <button className="hero-button">
            Pobierz aplikację
        </button>
        </div>
       
        </div>
        
    </div>
   </main>
  </div>
);
}