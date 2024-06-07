import React, { useEffect } from "react";
import Header from "./component/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./component/slider";
import CheckAvailability from "./component/CheckAvailability";
import Dining from "./component/Dining";
import DiningUI from "./component/DiningUI";
import Events from "./component/Events";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import GalleryboxComponent from "./component/GalleryboxComponent";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <Slider />
      <CheckAvailability />
      <Dining />
      <DiningUI />
      <Events />
      <Experience />
      <GalleryboxComponent />
      <Footer />
    </div>
  );
}

export default App;
