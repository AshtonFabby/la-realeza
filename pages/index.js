import axios from "axios";
import Head from "next/head";
import CategoriesList from "../components/CategoriesList";
import HeroSection from "../components/HeroSection";
import ItemsGrid from "../components/ItemsGrid";
import Weekly from "../components/Weekly";
// import { makePayment } from "../lib/paymets";

export default function Home({ dishes, weekly }) {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      {/* <button onClick={makePayment}> call pay</button> */}
      <HeroSection />
      <div className="container my-12 mx-auto">
        <h2 className=" font-hotpizza text-2xl">Welcome to Realeza</h2>
      </div>
      {/* <CategoriesList /> */}
      <ItemsGrid dishes={dishes} />
      <Weekly weekly={weekly} />
    </main>
  );
}

export const getStaticProps = async () => {
  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/dishes?populate=deep,3`
  );
  const response2 = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/weeklies?populate=deep,3`
  );

  const dishes = await response.data;
  const weekly = await response2.data;
  return {
    props: {
      dishes: dishes,
      weekly: weekly,
    },
  };
};
