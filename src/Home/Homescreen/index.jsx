import React from "react";
import Navbar from "../Navbar";
import Profile from "../Profile";
import About from "../About";
import Experience from "../Experience";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
