import { Card, Col, Row } from "react-bootstrap";

const PrevisioniOggi = ({ percepita, minima, massima, umidita, descrizione, img }) => {
  return (
    <>
      <Card>
        <Card.Header
        className="title"
          style={{
            fontWeight: "bolder",
            color: "rgba(0, 0, 0, 0.6)",
            background: "rgba(0,0,0,0.2)",
            borderRadius: 30
          }}>
          Il tempo adesso
        </Card.Header>
        <Card.Body>
          <Row>
            <Col
              className="d-flex align-items-center justify-content-center"
              md={12}>
              <Card.Img
                src={img}
                alt={descrizione}></Card.Img>
              <Card.Text style={{ fontWeight: "lighter" }}>{descrizione}</Card.Text>
            </Col>
            <Col>
              <Card.Title>Temperature</Card.Title>
              <Card.Text>{percepita}°C</Card.Text>
            </Col>
            <Col md={6}>
              <Card.Title>Humidity</Card.Title>
              <Card.Text>{umidita}%</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card.Title>Minimum</Card.Title>
              <Card.Text>{minima}°C</Card.Text>
            </Col>
            <Col md={6}>
              <Card.Title>Maximum</Card.Title>
              <Card.Text>{massima}°C</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default PrevisioniOggi;
