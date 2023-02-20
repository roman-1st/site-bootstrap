import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  Modal,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import styled from "styled-components";

let Styles = styled.div`
  .navbar-nav a,
  .nav-link a {
    color: #adb1b8;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`

let Navibar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <NavbarBrand style={{ cursor: "default" }} className="ms-2">
              {" "}
              Blog{" "}
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink>
                  {" "}
                  <Link to="/home"> Home </Link>{" "}
                </NavLink>
                <NavLink>
                  {" "}
                  <Link to="/users"> Users </Link>{" "}
                </NavLink>
                <NavLink>
                  {" "}
                  <Link to="/about"> About</Link>{" "}
                </NavLink>
              </Nav>
              <Nav className="me-2">
                <Button variant="primary" className="me-2" onClick={handleShow}>
                  {" "}
                  Log in
                </Button>
                <Button variant="primary" onClick={handleShow}>
                  {" "}
                  Sign Up
                </Button>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle> Log in </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Email adress</FormLabel>
              <FormControl type="email" placeholder="Enter email" />
              <FormText className="text-muted"> text </FormText>
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" placeholder="Enter password" />
            </FormGroup>
            <FormGroup controlId="formBasicCheckbox">
              <FormCheck type="checkbox" label="Remember me" />
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Navibar;
