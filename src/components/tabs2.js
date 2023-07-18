import { useState } from "react";
import "./tabs2.css";


function Tabs2() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container2">
        <ul className="buttons">
              <li >
                <button className={toggleState === 1 ? "buttons-item active-button" : "buttons-item"}
          onClick={() => toggleTab(1)}>Przejazdy</button>
              </li>

              <li >
                <button className={toggleState === 2 ? "buttons-item active-button" : "buttons-item"}
          onClick={() => toggleTab(2)}>Dostawca jedzenia</button>
              </li>
              
            </ul>
      

      <div className="content-tabs">
      
        <div
          className={toggleState === 1 ? "box-content2  active-content" : "box-content2"}
        >
          <section>
            <div className="section-text">
            <h2>Zamów przejazd i rusz w drogę w kilka minut.</h2>
            <p>Zeskanuj kod QR za pomocą aparatu telefonicznego, aby pobrać aplikację Bolt. Dostępne dla urządzeń z systemem iOS i Android.</p>
            <p>Możesz również <a href="" >zamówić przejazd online.</a> </p>
            </div>
            <div className="section-img">
                <div className="qr-code">
                <img src="/qr1.png" alt="qr"></img>
                </div>
                <picture>
                <img src="/phone-1.webp" alt="phone"></img>
                </picture>
            
            </div>
          </section>
        </div>

        <div
          className={toggleState === 2 ? "box-content2  active-content" : "box-content2"}
        >
          <section>
            <div className="section-text">
            <h2>Twoje ulubione jedzenie z szybką dostawą.</h2>
            <p>Zeskanuj kod QR za pomocą aparatu telefonicznego, aby pobrać aplikację Bolt. Dostępne dla urządzeń z systemem iOS i Android.</p>
            
            </div>
            <div className="section-img">
                <div className="qr-code">
                <img src="/qr2.png" alt="qr"></img>
                </div>
                <picture>
                <img src="/phone-2.webp" alt="phone"></img>
                </picture>
            
            </div>
          </section>
        </div>

        
        
      </div>
      <div className="content-tabs2">
      
        <div
          className={toggleState === 1 ? "box-content3  active-content" : "box-content3"}
        >
          <section>
            <div className="section-img">
                <div className="appstore">
                <img src="/app.svg" alt="app"></img>
                </div>
                <picture>
                <img src="/phone-3.webp" alt="phone"></img>
                </picture>
            
            </div>
          </section>
        </div>

        <div
          className={toggleState === 2 ? "box-content3  active-content" : "box-content3"}
        >
          <section>
            
            <div className="section-img">
                <div className="appstore">
                <img src="/app.svg" alt="app"></img>
                </div>
                <picture>
                <img src="/phone-4.webp" alt="phone"></img>
                </picture>
            
            </div>
          </section>
        </div>

        
        
      </div>
    </div>
  );
}

export default Tabs2;