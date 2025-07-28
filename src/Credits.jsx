import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import remekPhoto from './assets/images/Remek.jpg';
import alexPhoto from './assets/images/Alex.jpg';
import maxPhoto from './assets/images/Max.jpg';
import ostryPhoto from './assets/images/Ostry.jpg';
import oliPhoto from './assets/images/Oli.png';
import './App.css'
import Header from './Header.jsx'

function Credits() {
  /*  const toggle = document.getElementById('theme-toggle');
  
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark-mode');
      toggle.checked = true;
    }
  
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem(
        'dark-mode',
        document.body.classList.contains('dark-mode')
      );
    });
  */
  const [photo, setPhoto] = useState("Photo");
  return (
    <>
    <Header></Header>
      <main class="credits-main">
        <div class="credits-row">
          <div class="credits-container">
            <div class={`flip-inner ${photo === "Description" ? "flipped" : ""}`}>
              <div class="flip-front">
                <img src={remekPhoto} alt='Remy' />
                <h3>Remek Szabłowski</h3>
              </div>
              <div class="flip-back">
                <p>Amazing Personality</p>
              </div>
            </div>
          </div>
          <div class="credits-container">
            <div class={`flip-inner ${photo === "Description" ? "flipped" : ""}`}>
              <div class="flip-front">
                <img src={maxPhoto} alt="Max" />
                <h3>Max Wyżykowski</h3>
              </div>
              <div class="flip-back">
                <p>Best Rizz</p>
              </div>
            </div>
          </div>
          <div class="credits-container">
            <div class={`flip-inner ${photo === "Description" ? "flipped" : ""}`}>
              <div class="flip-front">
                <img src={alexPhoto} alt="Alex" />
                <h3>Alex Łysakowski</h3>
              </div>
              <div class="flip-back">
                <p>Just Cool Guy</p>
              </div>
            </div>
          </div>
        </div>
        <div class="credits-row2">
          <div class="credits-container">
            <div class={`flip-inner ${photo === "Description" ? "flipped" : ""}`}>
              <div class="flip-front">
                <img src={oliPhoto} alt="Oliver" />
                <h3>Oliver Kołacki</h3>
              </div>
              <div class="flip-back">
                <p>Awesome Person</p>
              </div>
            </div>
          </div>

          <div>
            <button onClick={() => setPhoto("Photo")}>Photo</button>
            <button onClick={() => setPhoto("Description")}>Description</button>
          </div>
          <div class="credits-container">
            <div class={`flip-inner ${photo === "Description" ? "flipped" : ""}`}>
              <div class="flip-front">
                <img src={ostryPhoto} alt="Sharpee" />
                <h3>Mateusz Ostrowski</h3>
              </div>
              <div class="flip-back">
                <p>The Best One</p>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Credits
