import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import FaqComponent from "../components/FaqComponent";
const KelasPage = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">All Course</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            
            {semuaKelas.map((Kelas) => {
              return (
                <Col key={Kelas.id} className="shadow-sm" data-aos="fade-up" data-aos-delay={Kelas.delay}>
                  <img src={Kelas.image} alt=" " className="mb-5 rounded 5" />
                  <div className="star mb-2 px-3">
                    <i className={Kelas.star1}></i>
                    <i className={Kelas.star2}></i>
                    <i className={Kelas.star3}></i>
                    <i className={Kelas.star4}></i>
                    <i className={Kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{Kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{Kelas.price}</p>
                    <button className="btn btn-info rounded-3">
                      {Kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
            
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default KelasPage;
