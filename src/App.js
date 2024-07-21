import React from 'react';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingBtn';
import { ThemeProvider } from 'react-bootstrap';


const theme = {
  colors: {
    primary: '#0070f3',
    bg: '#fff',
    text: '#333',
    grey: '#aaa',
  },
  fontSize: '16px',
};

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <div className='bg-app'>
        <NavigationBar />
        <Home />
        <About />
        <Skills />
        <Contact />
        <FloatingButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
