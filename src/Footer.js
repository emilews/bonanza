import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import './Footer.css';

class FooterPage extends React.Component {
render() {
return (
<Footer color="blue" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Bonanza</h5>
      <p>
        Created by APEL
      </p>
      </Col>
      <Col md="6">
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="http://www.apel.com"> APEL </a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;