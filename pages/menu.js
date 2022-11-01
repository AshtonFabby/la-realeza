import axios from "axios";
import ItemsGrid from "../components/ItemsGrid";
import MenuHero from "../components/MenuHero";
import RestaurantList from "../components/RestaurantList";
import Weekly from "../components/Weekly";

const Menu = ({ dishes, restaurants }) => {
  return (
    <div>
      <MenuHero />
      <div className="container my-12 mx-auto">
        <h2 className="font-hotpizza text-2xl">Welcome to Realeza</h2>
      </div>
      <RestaurantList restaurants={restaurants} />
      <h2 className=" font-hotpizza text-2xl mb-5 container mt-12">All</h2>
      <ItemsGrid dishes={dishes} />

      <Weekly />
    </div>
  );
};

export default Menu;

export const getStaticProps = async () => {
  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/dishes?populate=deep,3`
  );

  const dishes = await response.data;

  const response2 = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/restaurants?populate=*`
  );

  const restaurants = await response2.data;

  return {
    props: {
      dishes: dishes,
      restaurants: restaurants,
    },
  };
};
