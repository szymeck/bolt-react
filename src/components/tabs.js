import { useState } from "react";
import "./tabs.css";


function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
   
  };

  return (
    <div className="container">
        <ul className="buttons">
              <li >
                <button className={toggleState === 1 ? "buttons-item active-button" : "buttons-item"}
          onClick={() => toggleTab(1)}>Kierowca</button>
              </li>

              <li >
                <button className={toggleState === 2 ? "buttons-item active-button" : "buttons-item"}
          onClick={() => toggleTab(2)}>Dostawca</button>
              </li>
              <li >
                <button className={toggleState === 3 ? "buttons-item active-button" : "buttons-item"}
          onClick={() => toggleTab(3)}>Restauracja lub sklep</button>
              </li>
              <li >
                <button className={toggleState === 4 ? "buttons-item active-button" : "buttons-item"}
          onClick={() => toggleTab(4)}>Właściciel floty</button>
              </li>
            </ul>
      

      <div className="content-tabs">
      
        <div
          className={toggleState === 1 ? "box-content  active-content" : "box-content"}
        >
          <div className="content-left">
                <img src="/driver.webp" alt="driver"></img>
              </div>
              <div className="content-right">
                <h3>Zarabiaj za kierownicą</h3>
                <ol className="list-item">
                <li className="item">
                  <div className="item-text">
                    <h5>Jeździsz więcej, zarabiasz więcej</h5>
                    <p>
                      100+ milionów naszych klientów zamawia przejazdy przez
                      cały czas. W przypadku zwiększonego popytu, możesz zarobić
                      jeszcze więcej.
                    </p>
                  </div>
                </li>
                <li className="item">
                  <div className="item-text">
                    <h5>Ustalasz własny grafik</h5>
                    <p>
                    Jeździsz tak długo i tak często, jak chcesz. W tygodniu, w weekendy lub tylko wieczorami — dopasuj pracę za kierownicą do swojego grafiku.
                    </p>
                  </div>
                </li>
                
                <li className="item">
                  <div className="item-text">
                    <h5>Otrzymujesz wypłaty co tydzień</h5>
                    <p>
                    Otrzymasz zarobione pieniądze pod koniec każdego tygodnia — nie musisz czekać na nie cały miesiąc.
                    </p>
                  </div>
                </li>
                </ol>
                <div className="button">
                  <button>Dowiedz się wiecej</button>
                </div>
              </div>
        </div>

        <div
          className={toggleState === 2 ? "box-content  active-content" : "box-content"}
        >
          <div className="content-left">
                <img src="/courier.webp" alt="courier"></img>
              </div>
              <div className="content-right">
                <h3>Zarabiaj dostarczając jedzenie</h3>
                <ol className="list-item">
                <li className="item">
                  <div className="item-text">
                    <h5>Sposób na szybki zarobek</h5>
                    <p>
                    Nie ma żadnych stałych opłat ani prowizji. Otrzymujesz wynagrodzenie na koniec każdego tygodnia.
                    </p>
                  </div>
                </li>
                <li className="item">
                  <div className="item-text">
                    <h5>Zarabiaj kiedy chcesz i możesz</h5>
                    <p>
                    Ty decydujesz, kiedy i jak często dostarczasz zamówienia — w tygodniu, wieczorami, w weekendy albo tylko od czasu do czasu — to zależy od Ciebie.
                    </p>
                  </div>
                </li>
                
                <li className="item">
                  <div className="item-text">
                    <h5>Dostarczaj, jak chcesz</h5>
                    <p>
                    Rower, hulajnoga lub samochód — Ty wybierasz sposób realizacji dostaw.
                    </p>
                  </div>
                </li>
                </ol>
                <div className="button">
                  <button>Dowiedz się wiecej</button>
                </div>
              </div>
        </div>

        <div
          className={toggleState === 3 ? "box-content  active-content" : "box-content"}
        >
          <div className="content-left">
                <img src="/restaurant-store-owner.webp" alt="restaurant"></img>
              </div>
              <div className="content-right">
                <h3>Zwiększ swoją sprzedaż</h3>
                <ol className="list-item">
                <li className="item">
                  <div className="item-text">
                    <h5>Dotrzyj do nowych klientów</h5>
                    <p>
                    Miliony naszych użytkowników zamawiają jedzenie i zakupy w restauracjach i sklepach takich jak Twoje.
                    </p>
                  </div>
                </li>
                <li className="item">
                  <div className="item-text">
                    <h5>Zwiększ swoje zyski</h5>
                    <p>
                    Nasza duża sieć użytkowników = więcej klientów w Twojej restauracji lub Twoim sklepie.
                    </p>
                  </div>
                </li>
                
                <li className="item">
                  <div className="item-text">
                    <h5>Zamówienia dostarczamy sami</h5>
                    <p>
                    My zajmiemy się logistyką, żebyś Ty mógł skupić się na rozwijaniu swojej firmy.
                    </p>
                  </div>
                </li>
                </ol>
                <div className="button">
                  <button>Dowiedz się wiecej</button>
                </div>
              </div>
        </div>
        <div
          className={toggleState === 4 ? "box-content  active-content" : "box-content"}
        >
          <div className="content-left">
                <img src="/fleet-owner.webp" alt="fleet"></img>
              </div>
              <div className="content-right">
                <h3>Rozwiń swoją działalność transportową</h3>
                <ol className="list-item">
                <li className="item">
                  <div className="item-text">
                    <h5>Zwiększ swoje zyski</h5>
                    <p>
                    Nasza duża społeczność pasażerów = wiele zamówień przejazdów każdego dnia i wyższe zarobki
                    </p>
                  </div>
                </li>
                <li className="item">
                  <div className="item-text">
                    <h5>Zarządzaj swoimi pojazdami</h5>
                    <p>
                    Monitoruj swoje samochody, kierowców i przeglądaj ich aktualne statusy
                    </p>
                  </div>
                </li>
                
                <li className="item">
                  <div className="item-text">
                    <h5>Monitoruj wyniki kierowców</h5>
                    <p>
                    Masz wgląd w ukończone przejazdy Twoich kierowców, faktury i dane o wypłaconych zarobkach.
                    </p>
                  </div>
                </li>
                </ol>
                <div className="button">
                  <button>Dowiedz się wiecej</button>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;