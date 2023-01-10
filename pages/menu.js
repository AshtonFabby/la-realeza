import axios from "axios";
import Head from "next/head";
import ItemsGrid from "../components/ItemsGrid";
import MenuHero from "../components/MenuHero";
import RestaurantList from "../components/RestaurantList";
import Weekly from "../components/Weekly";

const Menu = ({ dishes, restaurants, weekly }) => {
  return (
    <main>
      <Head>
        <title>Menu</title>
      </Head>
      <MenuHero />
      <div className="container my-12 mx-auto">
        <h2 className="font-hotpizza text-2xl">Welcome to Realeza</h2>
      </div>
      <RestaurantList restaurants={restaurants} />
      <h2 className=" font-hotpizza text-2xl mb-5 container mt-12">All</h2>
      <ItemsGrid dishes={dishes} />

      <Weekly weekly={weekly} />
    </main>
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

  const response3 = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/weeklies?populate=deep,3`
  );

  const restaurants = await response2.data;
  const weekly = await response3.data;

  return {
    props: {
      dishes: dishes,
      restaurants: restaurants,
      weekly: weekly,
    },
  };
};
