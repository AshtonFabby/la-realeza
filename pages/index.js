import axios from "axios";
import CategoriesList from "../components/CategoriesList";
import HeroSection from "../components/HeroSection";
import ItemsGrid from "../components/ItemsGrid";
import Weekly from "../components/Weekly";

export default function Home({ dishes }) {
  return (
    <div>
      <HeroSection />
      <div className="container my-12 mx-auto">
        <h2 className=" font-hotpizza text-2xl">Welcome to Realeza</h2>
      </div>
      <CategoriesList />
      <ItemsGrid dishes={dishes} />
      <Weekly />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/dishes?populate=deep,3`
  );

  const dishes = await response.data;
  return {
    props: {
      dishes: dishes,
    },
  };
};
