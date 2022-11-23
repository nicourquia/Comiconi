import React from 'react';
import { Spinner, Container } from 'react-bootstrap';
import spiderman from '../../../src/assets/images/spiderman.png'

function LoadingSpinner() {
  return (
    <Container>
      <img src={spiderman} width="200" alt="spiderman" className="img-fluid" />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </Container>
  )
}

export default LoadingSpinner