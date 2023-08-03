import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Timeline from "./Timeline";
import Hero from "./Hero";
import Footer from "./Footer";

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
