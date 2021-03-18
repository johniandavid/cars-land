import { Row, Container } from "reactstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer fixed-bottom footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a>
                </a>
                Privacy & Legal
              </li>
              <li>
               <a>
               </a>
                Contact
              </li>
              <li>
                <a>
                </a>
                Careers
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}
              <i className="fa fa-heart heart" /> Cars | Land
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
