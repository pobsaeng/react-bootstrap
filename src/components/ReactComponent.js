import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ReactComponent() {
  return (
    <Container>
      <h1>React Bootstrap</h1>
      <Form>
        <Form.Group className="mb-2" controlId="formUsername">
          <Form.Label>User name</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </Container>
  );
}

export default ReactComponent;
