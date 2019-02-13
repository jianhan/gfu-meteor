import React, { Component } from "react";
import AccountsUIWrapper from "../components/AccountsUIWrapper";
import BlazeTemplate from "../components/BlazeTemplate";
import TopNavigationBar from "../components/TopNavigationBar";

import { Button, Container, Row, Col } from "react-bootstrap";

// App component - represents the whole app
export default class Main extends Component {
  render() {
    return (
      <Container>
        <TopNavigationBar />
        <Row>
          <Col md={12}>{this.props.content}</Col>
        </Row>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={8}>
            xs=12 md=8
            <BlazeTemplate name="atForm" />
            <AccountsUIWrapper />
            <Button variant="primary">Primary</Button>
          </Col>
          <Col xs={6} md={4}>
            xl=6 md=4
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col xs={6}>xs=6</Col>
          <Col xs={6}>xs=6</Col>
        </Row>
      </Container>
    );
  }
}
