import { useNavigate } from "react-router-dom";
import LandingCard from "../components/Cards/LandingCard";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Global/Footer";
import { accordionConfig } from "../data/accordionConfig";
import TrendingMovies from "../components/Default-Page-Components/Trending-Component/TrendingMovies";

const DefaultPage = () => {
  const navigate = useNavigate();

  return (
    <div className="default-container">
      <TrendingMovies />

      <LandingCard />
      <Accordion sections={accordionConfig} />

      <section className="section--get-started" data-section="get-started">
        <button role="button" onClick={() => navigate("login")}>
          Get Started
        </button>
        <p>Create or restart your membership</p>
      </section>

      <Footer />
    </div>
  );
};

export default DefaultPage;
