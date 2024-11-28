import Footer from "../Components/Footer";
import GetStarted from "../Components/GetStarted";
import Navbar from "../Components/Navbar";
import ResourcesHeroSection from "../Components/ResourcesHeroSection";

const ResourcesPage = () => {
  return (
    <div>
      <Navbar />
      <ResourcesHeroSection />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default ResourcesPage;
