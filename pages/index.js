import CategoriesList from "../components/CategoriesList";
import HeroSection from "../components/HeroSection";
import ItemsGrid from "../components/ItemsGrid";
import Weekly from "../components/Weekly";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container my-12 mx-auto">
        <h2 className=" font-hotpizza text-2xl">Welcome to Realeza</h2>
      </div>
      <CategoriesList />
      <ItemsGrid />
      <Weekly />
    </div>
  );
}
