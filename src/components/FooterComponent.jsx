import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container className="mt-0">
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <img className="image-footer" src="/technology.png"></img>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum similique, qui aperiam minima amet eum rem quia nemo, perspiciatis impedit et eos laborum officiis magni culpa consequuntur est earum!</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 987-6543-21009</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
              <i classname="fa-regular fa-envelope"></i>
              <p className="m-0">ramadianraihan@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Menu</h5>
          <Link to="">Home</Link>
          <Link to="kelas">Kelas</Link>
          <Link to="testimonial">Testimonial</Link>
          <Link to="faq">FAQ</Link>
          <Link to="syaratketen">Syarat dan Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-o mt-5">
          <h5 className="fw-bold mb-4">Subscribe to Our Newsletter</h5>
          <div className="subscribes">
          <input type="text"placeholder="Subscribe..." />
          <button className="btn btn-info rounded-end rounded-0">Subscribe</button>
          </div>
          <div className="social mt-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3 pt-5">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Muhammad Raihan Rahmadian</span>, All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
