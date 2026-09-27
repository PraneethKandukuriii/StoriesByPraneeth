import { Mail, ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <p className="footer-small">
          THE LAST FRAME
        </p>

        <h2 className="footer-title">
          Thanks for being
          <br />
          part of my <span>story.</span>
        </h2>

        <p className="footer-text">
          Every frame holds a moment.
          <br />
          Every moment becomes a story.
        </p>

        <div className="footer-connect">

          <a
            href="https://www.instagram.com/praneethkandukuriii/"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-card"
          >
            <FaInstagram size={21} />

            <div>
              <span>FOLLOW THE JOURNEY</span>
              <h4>Instagram</h4>
            </div>

            <ArrowUpRight size={18} />
          </a>

          <a
            href="mailto:praneethkandukuriii@gmail.com"
            className="connect-card"
          >
            <Mail size={21} />

            <div>
              <span>START A CONVERSATION</span>
              <h4>Let's Talk</h4>
            </div>

            <ArrowUpRight size={18} />
          </a>

        </div>

        <div className="footer-bottom">

          <h3>
            Stories<span>ByPraneeth</span>
          </h3>

          <p>
            © {new Date().getFullYear()} Praneeth
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;