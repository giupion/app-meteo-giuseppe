import { Col, Image, Row } from "react-bootstrap";

const ProssimiGiorni = ({ prossimi }) => {
  const giornoUno = prossimi.primo.dt_txt.split(" ");
  const giornoDue = prossimi.secondo.dt_txt.split(" ");
  const giornoTre = prossimi.terzo.dt_txt.split(" ");
  const giornoQuattro = prossimi.quarto.dt_txt.split(" ");
  const giornoCinque = prossimi.quinto.dt_txt.split(" ");
  const prima = giornoUno[0].slice(5);
  const seconda = giornoDue[0].slice(5);
  const terza = giornoTre[0].slice(5);
  const quarta = giornoQuattro[0].slice(5);
  const quinta = giornoCinque[0].slice(5);
  const iconaUno = `https://openweathermap.org/img/wn/${prossimi.primo.weather[0].icon}@2x.png`;
  const iconaDue = `https://openweathermap.org/img/wn/${prossimi.secondo.weather[0].icon}@2x.png`;
  const iconaTre = `https://openweathermap.org/img/wn/${prossimi.terzo.weather[0].icon}@2x.png`;
  const iconaQuattro = `https://openweathermap.org/img/wn/${prossimi.quarto.weather[0].icon}@2x.png`;
  const iconaCinque = `https://openweathermap.org/img/wn/${prossimi.quinto.weather[0].icon}@2x.png`;

  return (
    <>
      <h2 className="title"
        style={{
          fontWeight: "bolder",
          color: "rgba(0, 0, 0, 0.6)",
          background: "rgba(0,0,0,0.2)",
          borderRadius: 30
        }}>
        Previsione per i prossimi 5 giorni
      </h2>
      <div className="forecast-box">
        <Row className="flex-column">
          <Col>
            <p>{prima}</p>
          </Col>
          <Col>
            <Image
              src={iconaUno}
              alt={prossimi.primo.weather[0].description}
            />
          </Col>
          <Col>
            <p>{(prossimi.primo.main.feels_like - 273.15).toFixed(1)}°C</p>
          </Col>
        </Row>
        <Row className="flex-column">
          <Col>
            <p>{seconda}</p>
          </Col>
          <Col>
            <Image
              src={iconaDue}
              alt={prossimi.secondo.weather[0].description}
            />
          </Col>
          <Col>
            <p>{(prossimi.secondo.main.feels_like - 273.15).toFixed(1)}°C</p>
          </Col>
        </Row>
        <Row className="flex-column">
          <Col>
            <p>{terza}</p>
          </Col>
          <Col>
            <Image
              src={iconaTre}
              alt={prossimi.terzo.weather[0].description}
            />
          </Col>
          <Col>
            <p>{(prossimi.terzo.main.feels_like - 273.15).toFixed(1)}°C</p>
          </Col>
        </Row>
        <Row className="flex-column">
          <Col>
            <p>{quarta}</p>
          </Col>
          <Col>
            <Image
              src={iconaQuattro}
              alt={prossimi.quarto.weather[0].description}
            />
          </Col>
          <Col>
            <p>{(prossimi.quarto.main.feels_like - 273.15).toFixed(1)}°C</p>
          </Col>
        </Row>
        <Row className="flex-column">
          <Col>
            <p>{quinta}</p>
          </Col>
          <Col>
            <Image
              src={iconaCinque}
              alt={prossimi.quinto.weather[0].description}
            />
          </Col>
          <Col>
            <p>{(prossimi.quinto.main.feels_like - 273.15).toFixed(1)}°C</p>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ProssimiGiorni;
