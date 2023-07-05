import React from "react";
import "./HomePage.css";
import Tabs from "../components/tabs";
import Tabs2 from "../components/tabs2";
export default function HomePage() {
  return (
    <div>
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
                <li><a href=''>Przejazdy</a></li>
                <li><a href=''>Dostawa Bolt Food</a></li>
                <li><a href=''>Zakupy z dostawą</a></li>
                <li><a href=''>Hulajnogi elektryczne</a></li>
                <li><a href=''>Samochody na minuty</a></li>
                <li><a href=''>Business</a></li>
                <li><a href=''>Lotnisko</a></li>
                <li><a href=''>Miasta</a></li>
              </ul>
            </div>
            <div className="top-item">
              <h5>Zostań partnerem Bolt</h5>
              <ul>
                <li><a href=''>Zarejestruj się jako kierowca</a></li>
                <li><a href=''>Zarejestruj się jako dostawca</a></li>
                <li><a href=''>Floty</a></li>
                <li><a href=''>Bolt franczyza</a></li>
                <li><a href=''>Influencerzy</a></li>
              </ul>
            </div>
            <div className="top-item">
              <h5>O nas</h5>
              <ul>
                <li><a href=''>O nas</a></li>
                <li><a href=''>Kariera</a></li>
                <li><a href=''>Zielony plan</a></li>
                <li><a href=''>Prasa</a></li>
                <li><a href=''>Blog</a></li>
                <li><a href=''>Wytyczne dotyczące marki</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-bottom"></div>
      </footer>
    </div>
  );
}
