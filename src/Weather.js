import logo from './logo.svg';
import './App.css';

import {Button, Col, Container, Row} from 'react-bootstrap';
import {useState} from "react";


function App() {
  const [openCurrency,setOpenCurrency] = useState(false);
  const [openWeather,setOpenWeather] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <Row>
            <Col>
              <Button className="currencyBtn" onClick={() => setOpenCurrency(true)}>Currency Page</Button>
              {openCurrency?<Currency />:""}
              <Button onClick={() => setOpenWeather(true)} className="weatherBtn">Weather Page</Button>
              {openWeather?<Weather />:""}
            </Col>
          </Row>
        </Container>

      </header>
    </div>
  );
}

export default App;
