import Header from './Header.jsx'
import Footer from './Footer.jsx'

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
        <img src="images/1.jpg" alt="1"/>
        <img src="images/2.jpg" alt="2"/>
        <img src="images/3.jpg" alt="3"/>
        <img src="images/4.jpg" alt="4"/>
        <img src="images/5.jpg" alt="5"/>
        <img src="images/6.jpg" alt="6"/>
        <img src="images/7.jpg" alt="7"/>
        <img src="images/8.jpg" alt="8"/>
        <img src="images/9.jpg" alt="9"/>
        <img src="images/10.jpg" alt="10"/>
        <img src="images/11.jpg" alt="11"/>
        <img src="images/12.jpg" alt="12"/>
    </section>
    <Footer></Footer>
    </>
    )
}

export default Gallery