
import { Link } from "react-router-dom";
import "../index.css";



function Home() {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="bg-video">
        <source
          src="https://res.cloudinary.com/dz0gsqsrk/video/upload/v1782081317/HeroVideoSTP_vgsnsd.mp4"
          type="video/mp4"
        />
      </video>

      <div className="overlay"></div>

      <nav className="navbar">
        <h2 className="logo">
          Stories<span>ByPraneeth</span>
        </h2>

        <div className="nav-links">
          <a href="/">Home</a>
         <Link to="/portfolio">Portfolio</Link>
          <a href="/about">About</a>
          <button>Book Now</button>
        </div>
      </nav>
    </section>
  );
}

export default Home;