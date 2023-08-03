import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Hero />
        <Timeline />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
