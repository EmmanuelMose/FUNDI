import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Footer from "../../src/components/footer/Footer";
import Services from "../components/services/Services";
import HowItWorks from "../components/howitworks/HowItWorks";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default LandingPage;