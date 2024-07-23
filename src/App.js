import React from 'react';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingBtn';
import { Container } from 'react-bootstrap';
import Projects from './components/Projects';
import RestrictInspect from './components/RestrictInspect';

const App = () => {

  return (
        <Container className='d-flex flex-column justify-content-center align-items-center'>
            <RestrictInspect />
            <NavigationBar />
            <Home />
            <About />
            <Skills />
            <Projects/>
            <Contact />
            <FloatingButton />
        </Container>
  );
};

export default App;
