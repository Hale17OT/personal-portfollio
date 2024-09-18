import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/default-monochrome.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/
hallelujah-abdissa-502ab1219"
                target="blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Hale17OT" target="blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/hale17ot/" target="blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
