import HeroSection from "./components/HeroSection";
import ThreeBackground from "./components/ThreeBackground";

export default function Home() {
  return (
    <div className="min-h-screen  text-white relative">
      <ThreeBackground />
      <HeroSection />
    </div>
  );
}
