import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services.jsx";
import Banner from "./components/Banner.jsx";
import AppStore from "./components/AppStore.jsx";
import CoverBanner from "./components/CoverBanner.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Footer from "./components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      {/*<CoverBanner /> */}
      
       <Testimonial />
       <AppStore />
      <Footer />
    </div>
  );
};

export default App;