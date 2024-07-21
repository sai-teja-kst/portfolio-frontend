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
      <div className='bg-app'>
        <Container>
            <NavigationBar />
            <Home />
            <About />
            <Skills />
            <Contact />
            <FloatingButton />
        </Container>
      </div>
  );
};

export default App;
