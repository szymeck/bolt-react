import React from "react";
import "./HomePage.css";
import Tabs from "../components/tabs";
export default function HomePage() {
  return (
    <div>
      <nav>
        <div className="nav-top"></div>
        <div className="nav-bottom">
          <div className="logo">
            <img src="/bolt-logo.svg" alt="logo"></img>
          </div>
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
        <div
          className="hero"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-container">
            <div className="hero-text">
              <h1>Jeździsz dokąd chcesz, kiedy chcesz</h1>
              <p>
                Bolt to superaplikacja oferująca usługi w zakresie mobilności.
                Możesz ruszyć w trasę z kierowcą w kilka minut i wygodnie
                dojechać do celu. A jeżeli nie chcesz stać w korkach, wybierz
                hulajnogi elektryczne, na których szybko przejedziesz przez
                miasto.
              </p>
              <button className="hero-button">Pobierz aplikację</button>
            </div>
          </div>
        </div>
        <div className="container-1">
          <h2>Zarabiaj z Bolt</h2>
          <Tabs />
        </div>
        <div className="container-2">
          
          <h2>Nasze usługi</h2>
          <div className="box-grid">
            <div className="grid-item">
              <div className="item-text">
                <h5>Przejazdy</h5>
                <p>Zamów w kilka sekund, rusz w drogę w kilka minut</p>
              </div>
              <img src="/rides.png" alt="rides"></img>
            </div>
            <div className="grid-item">
              <div className="item-text">
                <h5>Dostawa jedzenia</h5>
                <p>Twoje ulubione jedzenie z szybką dostawą</p>
              </div>
              <img src="/delivery.png" alt="delivery"></img>
            </div>
            <div className="grid-item">
              <div className="item-text">
                <h5>Zakupy</h5>
                <p>Wszystko czego potrzebujesz z dostawą do domu</p>
              </div>
              <img src="/food.png" alt="food"></img>
            </div>
            <div className="grid-item">
              <div className="item-text">
                <h5>Samochody na minuty</h5>
                <p>Dobre samochody na wynajem dostępne od ręki</p>
              </div>
              <img src="/car-sharing.png" alt="car"></img>
            </div>
            <div className="grid-item">
              <div className="item-text">
                <h5>Mikromobilność</h5>
                <p>Wynajem szybkich i wygodnych pojazdów dwukołowych</p>
              </div>
              <img src="/micromobility.png" alt="micro"></img>
            </div>
            <div className="grid-item">
              <div className="item-text">
                <h5>Bussines</h5>
                <p>Zarządzaj przejazdami służbowymi swojego zespołu i klientów</p>
              </div>
              <img src="/business.png" alt="bussines"></img>
            </div>
          </div>
          <div className="box-container2">
            <div className="content">
              <div className="box-left">
                <h2>Tworzymy miasta dla ludzi, a nie dla samochodów</h2>
                <p>Dzieląc się naszą wiedzą na temat branży transportowej i udostępniając dane o przejazdach współdzielonych poprawiamy jakość życia w miastach.</p>
                <ol className="list-item">
                <li className="item">
                  <div className="item-text">
                    <h5>Dzielimy się najlepszymi praktykami</h5>
                    <p>
                    Jesteśmy w stanie dostarczyć wiedzę, która pomoże decydentom uczynić ich miasta lepszymi miejscami do życia dla mieszkańców.
                    </p>
                  </div>
                </li>
                <li className="item">
                  <div className="item-text">
                    <h5>Jedna aplikacja, wiele środków transportu</h5>
                    <p>
                    Dzięki wielu usługom transportowym dostępnym w jednej aplikacji, poruszanie się po mieście w sposób zrównoważony nigdy nie było tak proste jak teraz
                    </p>
                  </div>
                </li>
                
                <li className="item">
                  <div className="item-text">
                    <h5>Zrównoważony transport to nasz priorytet</h5>
                    <p>
                    Kompensujemy emisje CO2, generowane przez nasze przejazdy i dostawy minimalizując nasz wpływ na środowisko.
                    </p>
                  </div>
                </li>
                </ol>
              </div>
              <div className="box-right">
                <img src="/desktop.png" alt="city"></img>
              </div>
              
            </div>
            <div className="button">
                  <button>Dowiedz się wiecej</button>
                </div>
          </div>
        </div>
        <div className="container-3">
          <div className="box-container3">
            <div className="container3-text">
              <h2>O nas</h2>
              <p>Bolt to pierwsza europejska superaplikacja. Naszą misją jest tworzenie miast dla ludzi, oferowanie alternatywy dla tradycyjnych środków transportu i dla prywatnych samochodów. Za pośrednictwem aplikacji Bolt możesz skorzystać z przejazdów z kierowcą, samochodów na wynajem, hulajnóg i rowerów elektrycznych oraz zamówieć jedzenie i zakupy z dostawą do domu.

</p>
            </div>
            <img src="/world-map.svg" alt="map"></img>
            <div className="flex-wrapper">
              <div className="wrapper-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-8 md:h-8 text-action-primary mb-4"><path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM7.56095 11.0902C7.19971 10.729 6.61404 10.729 6.2528 11.0902C5.89157 11.4514 5.89157 12.0371 6.2528 12.3983L9.12135 15.2669C9.87311 16.0186 11.092 16.0186 11.8437 15.2669L17.7472 9.36339C18.1084 9.00216 18.1084 8.41648 17.7472 8.05524C17.386 7.69401 16.8003 7.69401 16.4391 8.05524C15.9082 8.58608 10.5156 14 10.5156 14L7.56095 11.0902Z" fill="currentColor"></path></svg>
              <div className="item-text">
                <h5>100+ milionów</h5>
                <p>klientów na całym świecie.</p>
              </div>
              </div>
              <div className="wrapper-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-8 md:h-8 text-action-primary mb-4"><path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM7.56095 11.0902C7.19971 10.729 6.61404 10.729 6.2528 11.0902C5.89157 11.4514 5.89157 12.0371 6.2528 12.3983L9.12135 15.2669C9.87311 16.0186 11.092 16.0186 11.8437 15.2669L17.7472 9.36339C18.1084 9.00216 18.1084 8.41648 17.7472 8.05524C17.386 7.69401 16.8003 7.69401 16.4391 8.05524C15.9082 8.58608 10.5156 14 10.5156 14L7.56095 11.0902Z" fill="currentColor"></path></svg>
              <div className="item-text">
                <h5>100+ milionów</h5>
                <p>klientów na całym świecie.</p>
              </div>
              </div>
              <div className="wrapper-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-8 md:h-8 text-action-primary mb-4"><path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM7.56095 11.0902C7.19971 10.729 6.61404 10.729 6.2528 11.0902C5.89157 11.4514 5.89157 12.0371 6.2528 12.3983L9.12135 15.2669C9.87311 16.0186 11.092 16.0186 11.8437 15.2669L17.7472 9.36339C18.1084 9.00216 18.1084 8.41648 17.7472 8.05524C17.386 7.69401 16.8003 7.69401 16.4391 8.05524C15.9082 8.58608 10.5156 14 10.5156 14L7.56095 11.0902Z" fill="currentColor"></path></svg>
              <div className="item-text">
                <h5>100+ milionów</h5>
                <p>klientów na całym świecie.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}
