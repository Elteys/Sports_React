import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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
      <main class="credits-main">
        <div class="credits-row">
          <div class="credits-container">
            <div class={`flip-inner ${photo === "Description" ? "flipped" : ""}`}>
              <div class="flip-front">
                <img src='images/Remek.jpg' alt='Remy' />
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
                <img src="images/Max.jpg" alt="Max" />
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
                <img src="images/Alex.jpg" alt="Alex" />
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
                <img src="images/Oli.png" alt="Oliver" />
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
                <img src="images/Ostry.jpg" alt="Sharpee" />
                <h3>Mateusz Ostrowski</h3>
              </div>
              <div class="flip-back">
                <p>The Best One</p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
