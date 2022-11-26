import React from "react";
import Navbar from './components/Navbar.jsx';
import Heading from './components/Heading.jsx';
import Container from './components/Container.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      {/* 
      ✅ Navbar
        - Logo
        - Title
        - About Me
        - My Journey
      - Heading
      - Container
        - Hey Atul!!
        - Add Item
        - List
        - Popup form
      - Footer
      */}
      <Navbar />
      <Heading />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
