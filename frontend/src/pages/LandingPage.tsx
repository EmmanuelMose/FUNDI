import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Footer from "../../src/components/footer/Footer";
import Services from "../components/services/Services";
import HowItWorks from "../components/howitworks/HowItWorks";
import Testmonies from "../components/testmonies/Testmonies";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Testmonies />
      <Footer />
    </>
  );
};

export default LandingPage;