import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: "#1C1E27";
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router >
        <Navbar />
        <Body>
          <About />
          <HeroSection />
          <Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Skills />
          <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
