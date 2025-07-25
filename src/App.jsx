import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main class="main-content">
        <section class="welcome-section">
          <h2 class="welcome-title">Welcome to Spot The Sport!</h2>
          <p class="welcome-text">
            Our platform is your go-to source for discovering and documenting
            sports venues. Whether you're a sports enthusiast, an athlete, or just
            a fan, here you'll find information about stadiums, arenas, sports
            fields, and many other places where the passion for sports comes
            alive!
          </p>
          <ul class="welcome-features">
            <li class="feature-item">
              🔎 Search for sports venues in your area with ease
            </li>
            <li class="feature-item">
              📸 Browse through an extensive gallery of unique sports locations
            </li>
            <li class="feature-item">
              🌍 Explore detailed venue locations on an interactive map
            </li>
            <li class="feature-item">
              📝 Add new places and share your experiences and knowledge
            </li>
          </ul>
          <p class="welcome-text-extra">
            Join our community and become a part of a growing database of sports
            enthusiasts! <br />
            Your contributions help others discover hidden gems and iconic sports
            arenas. <br />
            Together, we can build the most comprehensive collection of sports
            venues around the world.<br />
            <br />
            Ready to start your adventure? Dive into the gallery, explore new
            places, and help us make Spot The Sport the best source of sports
            venue information for everyone!
          </p>
          <a class="cta-button" href="gallery.html">Browse Venues</a>
        </section>
      </main>
    </>
  )
}

export default App
