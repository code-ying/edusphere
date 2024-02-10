import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial">
      <div className="testimonials min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="fw-bold text-center">Testimonials</h1>
            <p className="text-center"></p>
            </Col>
          </Row>
          <Row>
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="shadow-sm">
                <p className="desc">{data.desc}</p>
          <div className="people">
            <img src={data.image} alt="" />
            <div>
              <h5 className="mb-1">{data.name}</h5>
              <p className="m-0 fw-bold">{data.skill}</p>
            </div>
          </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default TestimonialPage
