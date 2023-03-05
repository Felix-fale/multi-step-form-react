import "./App.css";
import MultiStepProgressBarr from "./components/MultiStepProgressBarr";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { questions } from "./components/Questions";
import Form from "./components/Form";

function App() {
  const [index, setindex] = useState(2);
  const prevButton = () => {
    if (index > 1) {
      setindex((prevIndex) => prevIndex - 1);
    }
  };
  const nextButton = () => {
    if (index < 3) {
      setindex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="App">
      <Container className="h-100">
        <Row className="h-100">
          <Col className="align-self-center">
            <MultiStepProgressBarr step={index} />
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <Form list={questions} />
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button onClick={prevButton} disabled={index === 1}>
                Previous
              </Button>
              <Button onClick={nextButton}>Next</Button>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
