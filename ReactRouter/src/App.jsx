import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Faq from "./Components/faq";
import Newsletter from "./Components/Newsletter";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />}>
          <Route path="/contact/faq" element={<Faq />} />
          <Route path="contact/newsletter" element={<Newsletter />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
