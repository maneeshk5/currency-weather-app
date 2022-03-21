import logo from './logo.svg';
import './App.css';
import Currency from './Currency';
import Weather from "./Weather";
import {Button, Col, Container, Row} from 'react-bootstrap';
import {useState} from "react";


function App() {
  const [openCurrency,setOpenCurrency] = useState(false);
  const [openWeather,setOpenWeather] = useState(false);

  function currencyFunc(){
    setOpenCurrency(true);
    setOpenWeather(false);
  }
  function weatherFunc(){
    setOpenCurrency(false);
    setOpenWeather(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <Row>
            <Col>
              <Button className="currencyBtn" onClick={currencyFunc}>Currency Page</Button>
              <Button onClick={weatherFunc} className="weatherBtn">Weather Page</Button>
              {openCurrency?<Currency />:""}
              {openWeather?<Weather />:""}
            </Col>
          </Row>
        </Container>

      </header>
    </div>
  );
}

export default App;
