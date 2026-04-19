import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Faq from "./Components/faq";
import Newsletter from "./Components/Newsletter";
import RootLayout from "./layout/RootLayout";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<RootLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="newsletter" element={<Newsletter />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
