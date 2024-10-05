import React, { ReactNode } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">My Weblog</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <ThemeToggle />
          </Nav.Item>
        </Nav>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;