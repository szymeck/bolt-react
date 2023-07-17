import React, { useState,useEffect, useRef } from "react";
import "./HomePage.css";
import Tabs from "../components/tabs";
import Tabs2 from "../components/tabs2";

export default function HomePage() {
  const [toggleState, setToggleState] = useState(false);
  
    const toggleTab = (index) => {
      setToggleState(index);
      if (toggleState===index) {
        setToggleState(false); 
      }
    };

    let menuRef = useRef();

  useEffect(()=>{
    let handler= (e)=>{
      if(!menuRef.current.contains(e.target)){
        setToggleState(false); 
      }
    };

    document.addEventListener("mousedown",handler);
    return() =>{
      document.removeEventListener("mousedown",handler);
    }
  });

  

  return (
    <div className={toggleState === 1 ||toggleState === 2 || toggleState === 3|| toggleState === 4|| toggleState === 5 ? 'bd darker' : "bd"}>
    
      <nav>
        <div className="nav-top">
          <div className="nav-content">
            <div className="logo">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="i2ian1"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM11.0511 3.49465C11.4347 3.11289 11.7544 3 12 3C12.2456 3 12.5653 3.11289 12.9489 3.49465C13.3365 3.88046 13.7316 4.48883 14.0849 5.32007C14.7001 6.76773 15.1289 8.75039 15.2281 11H8.7719C8.87106 8.75039 9.29987 6.76773 9.91513 5.32007C10.2684 4.48883 10.6635 3.88046 11.0511 3.49465ZM6.77014 11C6.87027 8.526 7.33921 6.26781 8.07447 4.53779C8.19472 4.25484 8.32375 3.98211 8.46165 3.72222C5.54238 4.97169 3.41748 7.72027 3.05493 11H6.77014ZM3.05493 13H6.77014C6.87027 15.474 7.33921 17.7322 8.07447 19.4622C8.19472 19.7452 8.32375 20.0179 8.46165 20.2778C5.54238 19.0283 3.41748 16.2797 3.05493 13ZM8.7719 13H15.2281C15.1289 15.2496 14.7001 17.2323 14.0849 18.6799C13.7316 19.5112 13.3365 20.1195 12.9489 20.5053C12.5653 20.8871 12.2456 21 12 21C11.7544 21 11.4347 20.8871 11.0511 20.5053C10.6635 20.1195 10.2684 19.5112 9.91513 18.6799C9.29987 17.2323 8.87106 15.2496 8.7719 13ZM17.2299 13C17.1297 15.474 16.6608 17.7322 15.9255 19.4622C15.8053 19.7452 15.6762 20.0179 15.5384 20.2778C18.4576 19.0283 20.5825 16.2797 20.9451 13H17.2299ZM20.9451 11C20.5825 7.72027 18.4576 4.97169 15.5384 3.72222C15.6762 3.98211 15.8053 4.25484 15.9255 4.53779C16.6608 6.26781 17.1297 8.526 17.2299 11H20.9451Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Polski</p>
            </div>
            <div className="links">
              <p>Zostań partnerem Bolt jako:</p>
              <a href="">Kierowca</a>
              <a href="">Partner flotowy</a>
              <a href="">Dostawca</a>
              <a href="">Restauracja lub sklep</a>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="logo">
            <img src="/bolt-logo.svg" alt="logo"></img>
          </div>
          <ul className="links" ref={menuRef} >
            
              <li className={toggleState === 1 ? "link active-link" : "link"}
          onClick={() => toggleTab(1)}>Produkty
          <div className={toggleState === 1 ? "drop  active-drop" : "drop"} >
                <a>
                  <div className="drop-item">
                    <p>Przejazdy</p>
                    <p>Zamów przejazd w kilka minut!</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Samochody na minuty</p>
                    <p>Wynajem wysokiej jakości samochodów w przystępnych cenach</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Dostawa Bolt Food</p>
                    <p>Twoje ulubione jedzenie z szybką dostawą</p>
                  </div>
                </a>
              
                <a>
                  <div className="drop-item">
                    <p>Zakupy z dostawą</p>
                    <p>Podstawowe produkty z dostawą do domu</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Business</p>
                    <p>Zarządzaj podróżami służbowymi dla swojego zespołu i klientów</p>
                  </div>
                </a>
              </div></li>

              
            
            
              <li className={toggleState === 2 ? "link active-link" : "link"}
          onClick={() => toggleTab(2)} >Zostań partnerem Bolt
          <div className={toggleState === 2 ? "drop  active-drop" : "drop"}>
                <a>
                  <div className="drop-item">
                    <p>Kierowca</p>
                    <p>Zarabiaj jako kierowca według własnego grafiku</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Dostawca</p>
                    <p>Zarabiaj na dostawach jedzenia i zakupów</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Restauracja lub Sklep</p>
                    <p>Zdobądź więcej zamówień! Dodaj swoją restaurację lub sklepy do Bolt Food</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Flota</p>
                    <p>Zarabiaj więcej zgłaszając swoją flotę do Bolt</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Bolt Franczyza</p>
                    <p>Zbuduj i prowadź działalność w imieniu Bolt w swoim kraju</p>
                  </div>
                </a>
                
              </div></li>
              
            
            <li className={toggleState === 3 ? "link active-link" : "link"}
          onClick={() => toggleTab(3)}><div className={toggleState === 3 ? "drop  active-drop" : "drop"}>
                <a>
                  <div className="drop-item">
                    <p>Kariera</p>
                    <p>Zatrudniamy 🔥</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>O nas</p>
                    
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Zielony Plan</p>
                   
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Blog</p>
                   
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Prasa</p>
                    
                  </div>
                </a>
                
              </div>O nas</li>
            <li className="link">Pomoc</li>
            <li className={toggleState === 4 ? "link active-link" : "link"}
          onClick={() => toggleTab(4)}> <div className={toggleState === 4 ? "drop  active-drop" : "drop"}>
                <a>
                  <div className="drop-item">
                    <p>Bezpieczeństwo pasażerów</p>
                    
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Bezpieczeństwo kierowców</p>
                    
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Bezpieczna jazda na hulajnogach</p>
                    
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Laboratorium bezpieczeństwa</p>
                    
                  </div>
                </a>
                
                
              </div>Bezpieczeństwo</li>
            <li className={toggleState === 5 ? "link active-link" : "link"}
          onClick={() => toggleTab(5)}><div className={toggleState === 5 ? "drop  active-drop" : "drop"}>
                <a>
                  <div className="drop-item">
                    <p>Miasta, w których nas znajdziesz</p>
                    
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Lotniska</p>
                    
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Rozwiązania dla mias</p>
                   
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Stacje ładowania</p>
                    
                  </div>
                </a>
               
              </div>Miasta</li>
          </ul>
        </div>
        
      </nav>

      <main >
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
                <p>
                  Zarządzaj przejazdami służbowymi swojego zespołu i klientów
                </p>
              </div>
              <img src="/business.png" alt="bussines"></img>
            </div>
          </div>
          <div className="box-container2">
            <div className="content">
              <div className="box-left">
                <h2>Tworzymy miasta dla ludzi, a nie dla samochodów</h2>
                <p>
                  Dzieląc się naszą wiedzą na temat branży transportowej i
                  udostępniając dane o przejazdach współdzielonych poprawiamy
                  jakość życia w miastach.
                </p>
                <ol className="list-item">
                  <li className="item">
                    <div className="item-text">
                      <h5>Dzielimy się najlepszymi praktykami</h5>
                      <p>
                        Jesteśmy w stanie dostarczyć wiedzę, która pomoże
                        decydentom uczynić ich miasta lepszymi miejscami do
                        życia dla mieszkańców.
                      </p>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-text">
                      <h5>Jedna aplikacja, wiele środków transportu</h5>
                      <p>
                        Dzięki wielu usługom transportowym dostępnym w jednej
                        aplikacji, poruszanie się po mieście w sposób
                        zrównoważony nigdy nie było tak proste jak teraz
                      </p>
                    </div>
                  </li>

                  <li className="item">
                    <div className="item-text">
                      <h5>Zrównoważony transport to nasz priorytet</h5>
                      <p>
                        Kompensujemy emisje CO2, generowane przez nasze
                        przejazdy i dostawy minimalizując nasz wpływ na
                        środowisko.
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
              <p>
                Bolt to pierwsza europejska superaplikacja. Naszą misją jest
                tworzenie miast dla ludzi, oferowanie alternatywy dla
                tradycyjnych środków transportu i dla prywatnych samochodów. Za
                pośrednictwem aplikacji Bolt możesz skorzystać z przejazdów z
                kierowcą, samochodów na wynajem, hulajnóg i rowerów
                elektrycznych oraz zamówieć jedzenie i zakupy z dostawą do domu.
              </p>
            </div>
            <img src="/world-map.svg" alt="map"></img>
            <div className="flex-wrapper">
              <div className="wrapper-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-8 md:h-8 text-action-primary mb-4"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM7.56095 11.0902C7.19971 10.729 6.61404 10.729 6.2528 11.0902C5.89157 11.4514 5.89157 12.0371 6.2528 12.3983L9.12135 15.2669C9.87311 16.0186 11.092 16.0186 11.8437 15.2669L17.7472 9.36339C18.1084 9.00216 18.1084 8.41648 17.7472 8.05524C17.386 7.69401 16.8003 7.69401 16.4391 8.05524C15.9082 8.58608 10.5156 14 10.5156 14L7.56095 11.0902Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="item-text">
                  <h5>100+ milionów</h5>
                  <p>klientów na całym świecie.</p>
                </div>
              </div>
              <div className="wrapper-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-8 md:h-8 text-action-primary mb-4"
                >
                  <path
                    d="M9.78252 3.8859C9.11029 5.72085 8.6547 8.23798 8.57259 11.0752H15.4274C15.3453 8.23798 14.8897 5.72085 14.2175 3.8859C13.8439 2.86603 13.421 2.10572 12.9982 1.61758C12.573 1.12675 12.2327 1.00098 12 1.00098C11.7673 1.00098 11.427 1.12675 11.0018 1.61758C10.579 2.10572 10.1561 2.86603 9.78252 3.8859Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M1 11.0752H6.71539C6.79775 8.06454 7.27922 5.32384 8.03879 3.25049C8.28144 2.58817 8.55846 1.97734 8.87036 1.44071C4.58359 2.70239 1.3828 6.48968 1 11.0752Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M1 12.9267C1.38282 17.5123 4.58359 21.2995 8.87034 22.5612C8.55845 22.0246 8.28143 21.4138 8.03879 20.7515C7.27922 18.6781 6.79775 15.9374 6.71539 12.9267H1Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15.1297 22.5612C19.4164 21.2995 22.6172 17.5123 23 12.9267H17.2846C17.2022 15.9374 16.7208 18.6781 15.9612 20.7515C15.7186 21.4138 15.4415 22.0246 15.1297 22.5612Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M23 11.0752C22.6172 6.48968 19.4164 2.70239 15.1296 1.44072C15.4415 1.97734 15.7186 2.58817 15.9612 3.25049C16.7208 5.32384 17.2022 8.06454 17.2846 11.0752H23Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M14.2175 20.1161C14.8897 18.2811 15.3453 15.764 15.4274 12.9267H8.57259C8.6547 15.764 9.11029 18.2811 9.78252 20.1161C10.1561 21.1359 10.579 21.8962 11.0018 22.3844C11.427 22.8752 11.7673 23.001 12 23.001C12.2327 23.001 12.573 22.8752 12.9982 22.3844C13.421 21.8962 13.8439 21.1359 14.2175 20.1161Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="item-text">
                  <h5>5 kontynentów</h5>
                  <p>45+ krajów</p>
                </div>
              </div>
              <div className="wrapper-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-8 md:h-8 text-action-primary mb-4"
                >
                  <path
                    d="M9.15024 6.5C9.15024 8.01538 9.68106 9.40679 10.5669 10.4984C9.94804 10.8189 9.24529 11 8.50024 11C6.01496 11 4.00024 8.98528 4.00024 6.5C4.00024 4.01472 6.01496 2 8.50024 2C9.24529 2 9.94804 2.18107 10.5669 2.50159C9.68106 3.59321 9.15024 4.98462 9.15024 6.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M2.07684 13.6822C3.3955 12.9957 5.61508 12.6253 7.50191 12.527C6.6553 13.2491 6.15052 14.3149 6.15044 15.456L6.15012 19.9994C6.15012 20.7317 6.35478 21.4164 6.71 21.9993H3.00012C1.89615 21.9994 1.00012 21.1034 1.00012 19.9995L1.00045 15.4561C1.0005 14.7105 1.41549 14.0266 2.07684 13.6822Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.0002 6.5C11.0002 4.01472 13.015 2 15.5002 2C17.9855 2 20.0002 4.01472 20.0002 6.5C20.0002 8.98528 17.9855 11 15.5002 11C13.015 11 11.0002 8.98528 11.0002 6.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M9.07684 13.6822C10.638 12.8694 13.4618 12.4998 15.5013 12.5C17.5405 12.5002 20.3638 12.8699 21.924 13.6824C22.5853 14.0268 23.0002 14.7107 23.0002 15.4563V19.9993C23.0002 21.1033 22.1042 21.9993 21.0002 21.9993H10.0001C8.89615 21.9994 8.00012 21.1034 8.00012 19.9995L8.00045 15.4561C8.0005 14.7105 8.41549 14.0266 9.07684 13.6822Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="item-text">
                  <h5>3,1+ mln</h5>
                  <p>kierowców i dostawców</p>
                </div>
              </div>
            </div>
            <div className="button">
              <button>Więcej o Bolt</button>
            </div>
          </div>
        </div>
        <div className="container-4">
          <div className="box-container4">
            <div className="header">
              <h2>Aktualności</h2>
              <div className="box-right">
                <a href="">
                  Zobacz wszystko
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="tfhr10122"
                  >
                    <path
                      d="M13.7108 18.2889C13.3203 18.6795 13.3203 19.3126 13.7108 19.7032C14.1013 20.0937 14.7345 20.0937 15.125 19.7032L21.4142 13.4141C22.1953 12.6331 22.1953 11.3668 21.4142 10.5857L15.1213 4.29289C14.7307 3.90237 14.0976 3.90237 13.707 4.29289C13.3165 4.68342 13.3165 5.31658 13.707 5.70711L19 10.9999L2.99756 10.9999C2.44527 10.9999 1.99756 11.4477 1.99756 11.9999C1.99756 12.5522 2.44527 13 2.99756 13L19 12.9999L13.7108 18.2889Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="content-box">
              <div className="box-item">
                <a href="">
                  <article>
                    <div className="item-image">
                      <img src="/image-4.png" alt=""></img>
                    </div>
                    <h5>Parkuj jak zawodowiec</h5>
                    <p>4 minut czytania • 7.06.2023</p>
                  </article>
                </a>
              </div>
              <div className="box-item">
                <a href="">
                  <article>
                    <div className="item-image">
                      <img src="/image-5.jpg" alt=""></img>
                    </div>
                    <h5>
                      Regulamin Kampanii Marketingowej – Pocztówki od Bolt Food
                      2023
                    </h5>
                    <p>4 minut czytania • 6.06.2023</p>
                  </article>
                </a>
              </div>
              <div className="box-item">
                <a href="">
                  <article>
                    <div className="item-image">
                      <img src="/image-6.jpg" alt=""></img>
                    </div>
                    <h5>Czas, aby to kobiety przejęły stery w samochodzie</h5>
                    <p>4 minut czytania • 16.05.2023</p>
                  </article>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-5">
          <h2>Pobierz nasze aplikacje</h2>
          <Tabs2 />
        </div>
      </main>
      <footer>
        <div className="container-top">
          <div className="top-content">
            <div className="top-item">
              <img src="/bolt-logo.svg" alt="logo"></img>
              <div className="logo-pl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="i2ian1"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM11.0511 3.49465C11.4347 3.11289 11.7544 3 12 3C12.2456 3 12.5653 3.11289 12.9489 3.49465C13.3365 3.88046 13.7316 4.48883 14.0849 5.32007C14.7001 6.76773 15.1289 8.75039 15.2281 11H8.7719C8.87106 8.75039 9.29987 6.76773 9.91513 5.32007C10.2684 4.48883 10.6635 3.88046 11.0511 3.49465ZM6.77014 11C6.87027 8.526 7.33921 6.26781 8.07447 4.53779C8.19472 4.25484 8.32375 3.98211 8.46165 3.72222C5.54238 4.97169 3.41748 7.72027 3.05493 11H6.77014ZM3.05493 13H6.77014C6.87027 15.474 7.33921 17.7322 8.07447 19.4622C8.19472 19.7452 8.32375 20.0179 8.46165 20.2778C5.54238 19.0283 3.41748 16.2797 3.05493 13ZM8.7719 13H15.2281C15.1289 15.2496 14.7001 17.2323 14.0849 18.6799C13.7316 19.5112 13.3365 20.1195 12.9489 20.5053C12.5653 20.8871 12.2456 21 12 21C11.7544 21 11.4347 20.8871 11.0511 20.5053C10.6635 20.1195 10.2684 19.5112 9.91513 18.6799C9.29987 17.2323 8.87106 15.2496 8.7719 13ZM17.2299 13C17.1297 15.474 16.6608 17.7322 15.9255 19.4622C15.8053 19.7452 15.6762 20.0179 15.5384 20.2778C18.4576 19.0283 20.5825 16.2797 20.9451 13H17.2299ZM20.9451 11C20.5825 7.72027 18.4576 4.97169 15.5384 3.72222C15.6762 3.98211 15.8053 4.25484 15.9255 4.53779C16.6608 6.26781 17.1297 8.526 17.2299 11H20.9451Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Polski</p>
              </div>
              <div className="logo-pl2">
                <img src="/pl.svg" alt="pl"></img>
                <p>Polska</p>
              </div>
            </div>
            <div className="top-item">
              <h5>Bolt</h5>
              <ul>
                <li>
                  <a href="">Przejazdy</a>
                </li>
                <li>
                  <a href="">Dostawa Bolt Food</a>
                </li>
                <li>
                  <a href="">Zakupy z dostawą</a>
                </li>
                <li>
                  <a href="">Hulajnogi elektryczne</a>
                </li>
                <li>
                  <a href="">Samochody na minuty</a>
                </li>
                <li>
                  <a href="">Business</a>
                </li>
                <li>
                  <a href="">Lotnisko</a>
                </li>
                <li>
                  <a href="">Miasta</a>
                </li>
              </ul>
            </div>
            <div className="top-item">
              <h5>Zostań partnerem Bolt</h5>
              <ul>
                <li>
                  <a href="">Zarejestruj się jako kierowca</a>
                </li>
                <li>
                  <a href="">Zarejestruj się jako dostawca</a>
                </li>
                <li>
                  <a href="">Floty</a>
                </li>
                <li>
                  <a href="">Bolt franczyza</a>
                </li>
                <li>
                  <a href="">Influencerzy</a>
                </li>
              </ul>
            </div>
            <div className="top-item">
              <h5>O nas</h5>
              <ul>
                <li>
                  <a href="">O nas</a>
                </li>
                <li>
                  <a href="">Kariera</a>
                </li>
                <li>
                  <a href="">Zielony plan</a>
                </li>
                <li>
                  <a href="">Prasa</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Wytyczne dotyczące marki</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-bottom">
          <div className="box-top">
            <div className="box-left">
              <a href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.999 2C6.477 2 2 6.477 2 11.999C2 16.989 5.656 21.125 10.437 21.878V14.89H7.897V11.999H10.437V9.796C10.437 7.288 11.93 5.905 14.213 5.905C15.307 5.905 16.453 6.1 16.453 6.1V8.559H15.189C13.949 8.559 13.561 9.331 13.561 10.122V11.997H16.332L15.889 14.888H13.561V21.876C18.342 21.127 21.998 16.99 21.998 11.999C21.998 6.477 17.521 2 11.999 2Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.633 7.99698C19.646 8.17198 19.646 8.34598 19.646 8.51998C19.646 13.845 15.593 19.981 8.186 19.981C5.904 19.981 3.784 19.32 2 18.172C2.324 18.209 2.636 18.222 2.973 18.222C4.78599 18.2264 6.54765 17.6201 7.974 16.501C7.13342 16.4858 6.31858 16.2084 5.64324 15.7077C4.9679 15.207 4.46578 14.5079 4.207 13.708C4.456 13.745 4.706 13.77 4.968 13.77C5.329 13.77 5.692 13.72 6.029 13.633C5.11676 13.4488 4.29647 12.9543 3.70762 12.2337C3.11876 11.513 2.79769 10.6106 2.799 9.67998V9.62998C3.336 9.92898 3.959 10.116 4.619 10.141C4.06609 9.77357 3.61272 9.27501 3.29934 8.68977C2.98596 8.10454 2.82231 7.45084 2.823 6.78698C2.823 6.03898 3.022 5.35298 3.371 4.75498C4.38314 6 5.6455 7.01854 7.07634 7.74464C8.50717 8.47074 10.0746 8.8882 11.677 8.96998C11.615 8.66998 11.577 8.35898 11.577 8.04698C11.5767 7.51794 11.6807 6.99404 11.8831 6.50522C12.0854 6.0164 12.3821 5.57226 12.7562 5.19817C13.1303 4.82408 13.5744 4.52739 14.0632 4.32506C14.5521 4.12273 15.076 4.01872 15.605 4.01898C16.765 4.01898 17.812 4.50498 18.548 5.29098C19.4498 5.1166 20.3145 4.7874 21.104 4.31798C20.8034 5.2488 20.1738 6.03809 19.333 6.53798C20.1328 6.44676 20.9144 6.23644 21.652 5.91398C21.1011 6.71708 20.4185 7.42133 19.633 7.99698Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9971 11.979C14.9971 13.6375 13.6526 14.982 11.9941 14.982C10.3356 14.982 8.99109 13.6375 8.99109 11.979C8.99109 10.3205 10.3356 8.97598 11.9941 8.97598C13.6526 8.97598 14.9971 10.3205 14.9971 11.979Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5281 6.08902C20.7952 6.79779 20.937 7.54764 20.9471 8.30502C21.0028 9.25761 21.0031 9.56915 21.005 11.9804L21.0051 12.014C21.0051 14.457 20.9921 14.762 20.9491 15.724C20.9341 16.473 20.7931 17.211 20.5301 17.911C20.2982 18.5087 19.9442 19.0515 19.4909 19.5049C19.0376 19.9582 18.4948 20.3121 17.8971 20.544C17.1974 20.8066 16.4582 20.9483 15.7111 20.963C14.7561 21.019 14.4431 21.019 12.0011 21.019C9.55907 21.019 9.25407 21.006 8.29107 20.963C7.54244 20.9384 6.8035 20.7862 6.10607 20.513C5.50813 20.2816 4.96505 19.928 4.51151 19.4748C4.05797 19.0216 3.70395 18.4788 3.47207 17.881C3.20907 17.18 3.06807 16.442 3.05307 15.694C2.99707 14.738 2.99707 14.426 2.99707 11.984C2.99707 9.54202 3.01007 9.23702 3.05307 8.27402C3.06719 7.52713 3.2089 6.78815 3.47207 6.08902C3.70356 5.49108 4.05732 4.94804 4.5107 4.49465C4.96409 4.04126 5.50713 3.68751 6.10507 3.45602C6.80442 3.19349 7.54323 3.05147 8.29007 3.03602C9.24507 2.98102 9.55807 2.98102 12.0001 2.98102C14.4421 2.98102 14.7471 2.99302 15.7091 3.03602C16.4562 3.05136 17.1954 3.19338 17.8951 3.45602C18.4929 3.68767 19.0359 4.04148 19.4892 4.49485C19.9426 4.94822 20.2964 5.49117 20.5281 6.08902ZM7.37107 11.979C7.37107 14.533 9.44007 16.602 11.9941 16.602C13.2202 16.602 14.396 16.115 15.263 15.248C16.13 14.381 16.6171 13.2051 16.6171 11.979C16.6171 10.7529 16.13 9.57704 15.263 8.71006C14.396 7.84308 13.2202 7.35602 11.9941 7.35602C9.44007 7.35602 7.37107 9.42502 7.37107 11.979ZM16.3884 8.18123C16.5192 8.23536 16.6595 8.26315 16.8011 8.26302C17.3961 8.26302 17.8781 7.78102 17.8781 7.18502C17.8781 7.04352 17.8502 6.9034 17.7961 6.77268C17.7419 6.64195 17.6625 6.52317 17.5625 6.42311C17.4624 6.32306 17.3436 6.24369 17.2129 6.18954C17.0822 6.13539 16.9421 6.10752 16.8006 6.10752C16.6591 6.10752 16.519 6.13539 16.3882 6.18954C16.2575 6.24369 16.1387 6.32306 16.0387 6.42311C15.9386 6.52317 15.8592 6.64195 15.8051 6.77268C15.7509 6.9034 15.7231 7.04352 15.7231 7.18502C15.7229 7.32662 15.7507 7.46686 15.8049 7.59771C15.859 7.72855 15.9384 7.84744 16.0385 7.94757C16.1386 8.0477 16.2575 8.1271 16.3884 8.18123Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.17104 5.00898C7.17104 6.21738 6.19144 7.19698 4.98304 7.19698C3.77464 7.19698 2.79504 6.21738 2.79504 5.00898C2.79504 3.80058 3.77464 2.82098 4.98304 2.82098C6.19144 2.82098 7.17104 3.80058 7.17104 5.00898Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M9.23697 20.994V8.85502H12.855V10.515H12.906C13.409 9.56202 14.639 8.55502 16.474 8.55502C20.296 8.55502 21 11.068 21 14.338V20.995H17.229V15.091C17.229 13.684 17.205 11.873 15.268 11.873C13.304 11.873 13.006 13.407 13.006 14.991V20.994H9.23697Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6.86997 8.85502H3.09497V20.994H6.86997V8.85502Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.59 6.69C18.5931 6.47079 17.6913 5.94144 17.014 5.17789C16.3367 4.41435 15.9187 3.45587 15.82 2.44V2H12.37V15.67C12.3707 16.2766 12.1805 16.868 11.8264 17.3604C11.4723 17.8529 10.9722 18.2215 10.397 18.414C9.82181 18.6065 9.20062 18.6131 8.62144 18.4329C8.04226 18.2527 7.53446 17.8948 7.16996 17.41C6.84341 16.9808 6.64345 16.4689 6.59269 15.932C6.54193 15.3951 6.6424 14.8548 6.88274 14.372C7.12308 13.8892 7.49369 13.4834 7.95267 13.2003C8.41166 12.9172 8.94069 12.7681 9.47996 12.77C9.7782 12.7683 10.075 12.8121 10.36 12.9V9.4C10.0283 9.35892 9.69407 9.34221 9.35996 9.35C8.12927 9.38288 6.93488 9.77393 5.92305 10.4753C4.91121 11.1766 4.12585 12.1578 3.66314 13.2986C3.20042 14.4395 3.08044 15.6905 3.31788 16.8986C3.55532 18.1066 4.13987 19.2191 4.99996 20.1C5.88145 20.9962 7.00945 21.6101 8.24066 21.8638C9.47186 22.1175 10.7507 21.9994 11.9146 21.5246C13.0786 21.0498 14.0751 20.2397 14.7776 19.1973C15.4801 18.1548 15.8568 16.9271 15.86 15.67V8.67C17.2514 9.66395 18.92 10.1956 20.63 10.19V6.79C20.2941 6.79138 19.9589 6.75787 19.63 6.69H19.59Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="box-right">
              <button>Pobierz aplikację Bolt</button>
              <button>Pobierz aplikację Bolt Food</button>
              <button>Zamów przejazd online</button>
            </div>
          </div>
          <div className="box-bottom">
            <div className="box-left">
              <p>© 2023 Bolt Technology OÜ</p>
            </div>
            <div className="box-right">
              <a href="">Dostawcy</a>
              <a href="">Przepisy i regulacje prawne</a>
              <a href="">Pliki cookie</a>
              <a href="">Bezpieczeństwo</a>
            </div>
          </div>
        </div>
      </footer>
    
    </div>
  );
}
