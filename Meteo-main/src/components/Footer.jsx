import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container
      className="mt-5 pt-4"
      style={{ color: "rgba(0, 0, 0, 0.6)", background: "rgba(0,0,0,0.2)", borderRadius: 30 }}>
      <Row>
        <Col>
          <p className="title">&copy; 2023 IlMeteoCheVorrei</p>
        </Col>
        <Col>
          <Link to="/">
            <Button className="btn-gen  title">Torna alla ricerca</Button>
          </Link>
        </Col>
        <Col>
          <p className="title">Privacy</p>
         
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
