import React, { useState } from 'react'
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'

import "./Subscription.css"


const Subscription = () => {
    const [email, setEmail] = useState();

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

  const handleSubmit = async () => {
    if (email == null || email == undefined) {
      alert("Please Enter an Email Address");
      return;
    }
    const token =
      "your-apikey";
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `APIKey ${token}`,
      },
    };
    const data = {
      email: email,
    };
    console.log(data);
    axios
      .post(`http://127.0.0.1:8000/api/emailbox/addEmail/`, data, config)
      .then((response) => {
        alert("Subscription Added Successfully!");
      });
  };
  return (
    <>
      <Container>
        <Card class="card">
          <Card.Title className="card-title">
            <h1>Subscribe to our Newsletter!</h1>{" "}
          </Card.Title>
          <Row className="card-row">
            <Col xl={3} lg={3} md={12} sm={12}>
              <Card.Text className="card-text">
                <h5>
                  Get weekly updates about our product on your email, we promise
                  to not spam ✌️
                </h5>
              </Card.Text>
            </Col>
            <Col xl={9} lg={9} md={12} sm={12}>
              <Form className="card-form">
                <Row>
                  <Col xl={6} lg={6} md={12} sm={12}>
                    <Form.Group controlId="formTextField">
                      <Form.Control
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Enter Email Address"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Button
                        className="formButton"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Add Me!
                      </Button>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default Subscription