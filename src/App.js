import React from "react";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import FloatingButton from "./components/FloatingBtn";
import { Container } from "react-bootstrap";
import Projects from "./components/Projects";
import AboutPage from "./components/AboutPage";

const App = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center mb-5"
    >
      <NavigationBar />
      <Home />
      <AboutPage />
      <Skills />
      <Projects />
      <Contact />
      <FloatingButton />
    </Container>
  );
};

export default App;
