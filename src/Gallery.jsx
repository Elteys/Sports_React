import Header from './Header.jsx'
import Footer from './Footer.jsx'
import photo1 from './assets/images/1.jpg'
import photo2 from './assets/images/2.jpg'
import photo3 from './assets/images/3.jpg'
import photo4 from './assets/images/4.jpg'
import photo5 from './assets/images/5.jpg'
import photo6 from './assets/images/6.jpg'
import photo7 from './assets/images/7.jpg'
import photo8 from './assets/images/8.jpg'
import photo9 from './assets/images/9.jpg'
import photo10 from './assets/images/10.jpg'
import photo11 from './assets/images/11.jpg'
import photo12 from './assets/images/12.jpg'

function Gallery(){
    return(
    <>
    <Header></Header>
    <main className="main-content">
    <section className="welcome-section">
      <h2 className="welcome-title">Discover Our Facilities!</h2>
      <p className="welcome-text">
        Take a look at our wide range of sports facilities
      </p>
    </section>
    </main>
    <section className="gallery">
        <img src={photo1} alt="1"/>
        <img src={photo2} alt="2"/>
        <img src={photo3} alt="3"/>
        <img src={photo4} alt="4"/>
        <img src={photo5} alt="5"/>
        <img src={photo6} alt="6"/>
        <img src={photo7} alt="7"/>
        <img src={photo8} alt="8"/>
        <img src={photo9} alt="9"/>
        <img src={photo10} alt="10"/>
        <img src={photo11} alt="11"/>
        <img src={photo12} alt="12"/>
    </section>
    <Footer></Footer>
    </>
    )
}

export default Gallery