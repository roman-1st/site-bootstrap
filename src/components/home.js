import React from "react";
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";
import Jumbotron from "./jumbotron";
import Slider from "./slider";

let Home = () => {
  return (
    <>
      <Slider />
      <Container style={{ width:'100vw', margin: '0', padding: "2rem 0" }}>
        <Row style={{width: "100vw"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              marginLeft: '10px',
              
            }}
          >
            <div style={{marginBottom: '1rem'}}>
              <Col fluid="true" style={{ justifyItems: "center"}}>
                <Card style={{ width: "18rem" }}>
                  <CardImg
                    variant="top"
                    src="https://morgoth.ru/images/2022/07/29/9054096c6bdae8c6f701f87bb1cfceb8.jpg"
                  />
                  <Card.Body>
                    <Card.Title> Blog </Card.Title>
                    <Card.Text>
                      Aliqua nisi in do eu tempor enim ut ut sint Lorem duis
                      officia.
                    </Card.Text>
                    <Button variant="primary"> View more</Button>
                  </Card.Body>
                </Card>
              </Col>
            </div>
            <div style={{marginBottom: '1rem'}}>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <CardImg
                    variant="top"
                    src="http://35photo.ru/photos_main/435/2175826.jpg"
                  />
                  <Card.Body>
                    <Card.Title> Blog </Card.Title>
                    <Card.Text>
                      Aliqua nisi in do eu tempor enim ut ut sint Lorem duis
                      officia.
                    </Card.Text>
                    <Button variant="primary"> View more</Button>
                  </Card.Body>
                </Card>
              </Col>
            </div>
            <div>
              <Col className="width">
                <Card className="me-2" style={{ width: "18rem" }}>
                  <CardImg
                    variant="top"
                    src="https://photobazaar.ru/system/photos/thumbnails/000/014/432/compressed/406051ff2baf34e024269b67ba2adba7.jpg?1472041484"
                  />
                  <Card.Body>
                    <Card.Title> Blog </Card.Title>
                    <Card.Text>
                      Aliqua nisi in do eu tempor enim ut ut sint Lorem duis
                      officia.
                    </Card.Text>
                    <Button variant="primary"> View more</Button>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </div>
        </Row>
      </Container>
      <Jumbotron />
      <Container style={{ margin: "2rem auto", padding: '0'}}>
        <Row>
          <Col md={7}>
            <img
              src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/t1e8/drXohvyDK/12/99/129917453/129917453_2048.jpg"
              height={400}
                style={{width:'90vw', maxWidth:'500px'}}
            />
          </Col>
          <Col md={5}>
            <h2> Blog it is blog</h2>
            <p>
              {" "}
              Reprehenderit incididunt cillum eu pariatur ea eu minim aliquip.
              Eu est aute voluptate ipsum qui eiusmod veniam culpa sit excepteur
              officia consequat aliqua. Consectetur voluptate irure nulla
              fugiat.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

// src="https://www.rgo.ru/sites/default/files/styles/full_view/public/media/2020-12-14/peyzazh_stepanenko_nikolay_-_dolina_oseni_-_2020_-_515869.jpg?itok=BtvZDoAB"
// src="https://www.rgo.ru/sites/default/files/styles/full_view/public/media/2020-12-14/04_novikov_vitaliy_-_preddverie_polyarnoy_nochi_-_2020_-_464882.jpg?itok=_GOSDc7h"
