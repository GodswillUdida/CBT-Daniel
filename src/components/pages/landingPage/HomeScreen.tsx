import Hero from "./Hero";
import Strategy from "./Strategy";
import TeachingService from "./TeachingService";

const HomeScreen = () => {
  return (
    <div className="relative pt-[80px]">
      <Hero />
      <Strategy />
      <TeachingService />
    </div>
  );
};

export default HomeScreen;
