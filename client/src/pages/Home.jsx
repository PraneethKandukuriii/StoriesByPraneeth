import { Link } from "react-router-dom";
import "../index.css";

function Home() {
  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="bg-video"
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dz0gsqsrk/video/upload/v1790460050/heroIntro_phio4d.mp4"
          type="video/mp4"
        />
      </video>

      <div className="video-overlay"></div>

      <nav className="navbar">
        <Link to="/" className="logo">
          Stories<span>ByPraneeth</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>

          <Link to="/contact" className="book-btn">
            Book Now
          </Link>
        </div>
      </nav>

      <div className="hero-center">
        <h1>
          Stories<span>ByPraneeth</span>
        </h1>

        <p>
          Moments fade. Stories last forever.
        </p>
      </div>
    </section>
  );
}

export default Home;