import Easy from "../Components/Easy";
import FileTaxes from "../Components/FileTaxes";
import Footer from "../Components/Footer";
import GetStarted from "../Components/GetStarted";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import TaxExperts from "../Components/TaxExperts";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FileTaxes />
      <TaxExperts />
      <Easy />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default LandingPage;
