import React from 'react';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingBtn';
import { Container } from 'react-bootstrap';

const App = () => {

  return (
        <Container className='d-flex flex-column justify-content-center align-items-center'>
            <NavigationBar />
            <Home />
            <About />
            <Skills />
            <Contact />
            <FloatingButton />
        </Container>
  );
};

export default App;
