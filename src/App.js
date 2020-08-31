import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Banner from "./components/Banner/Banner"
import Shows from "./components/Shows/Shows"
import Shop from "./components/Shop/Shop"
import About from "./components/About/About"
import Video from "./components/Video/Video"
import Parallax from "./components/Parallax/Parallax";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <main>
        <News />
        <Banner />
        <Shows />
        <Shop />
        <About />
        <Video />
        <Parallax />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;