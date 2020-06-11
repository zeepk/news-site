import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import React from "react"

const linkStyle = {
  color: "white",
  paddingRight: "10px",
}

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand>News Thing 📰</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link style={linkStyle} to="/">
          Example 1
        </Link>
        <Link style={linkStyle} to="/another-example">
          Example 2
        </Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
