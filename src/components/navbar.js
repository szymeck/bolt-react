import { useState,useEffect,useRef } from "react";

function Navbb() {
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
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
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
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
                  </div>
                </a>
              </div></li>

              
            
            
              <li className={toggleState === 2 ? "link active-link" : "link"}
          onClick={() => toggleTab(2)} >Zostań partnerem Bolt
          <div className={toggleState === 2 ? "drop  active-drop" : "drop"}>
                <a>
                  <div className="drop-item">
                    <p>asd</p>
                    <p>Zamów przejazd w kilka minut!</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>asd</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
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
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
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
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
                  </div>
                </a>
              </div></li>
              
            
            <li className={toggleState === 3 ? "link active-link" : "link"}
          onClick={() => toggleTab(3)}><div className={toggleState === 3 ? "drop  active-drop" : "drop"}>
                <a>
                  <div className="drop-item">
                    <p>asd</p>
                    <p>Zamów przejazd w kilka minut!</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>asd</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
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
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
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
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
                  </div>
                </a>
              </div>O nas</li>
            <li className="link">Pomoc</li>
            <li className={toggleState === 4 ? "link active-link" : "link"}
          onClick={() => toggleTab(4)}> <div className={toggleState === 4 ? "drop  active-drop" : "drop"}>
                <a>
                  <div className="drop-item">
                    <p>asd</p>
                    <p>Zamów przejazd w kilka minut!</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>asd</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
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
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
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
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
                  </div>
                </a>
              </div>Bezpieczeństwo</li>
            <li className={toggleState === 5 ? "link active-link" : "link"}
          onClick={() => toggleTab(5)}><div className={toggleState === 5 ? "drop  active-drop" : "drop"}>
                <a>
                  <div className="drop-item">
                    <p>asd</p>
                    <p>Zamów przejazd w kilka minut!</p>
                  </div>
                </a>
                <a>
                  <div className="drop-item">
                    <p>asd</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
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
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
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
                    <p>Hulajnogi elektryczne</p>
                    <p>Wynajmij hulajnogę lub rower elektryczny</p>
                  </div>
                </a>
              </div>Miasta</li>
          </ul>
        </div>
)
}
export default Navbb;