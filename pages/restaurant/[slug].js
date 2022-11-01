import axios from "axios";
import Image from "next/image";
import ItemsGrid from "../../components/ItemsGrid";
import Weekly from "../../components/Weekly";
import { imageToUrl } from "../../lib/helpers";

const Restaurant = ({ restaurant }) => {
  const restaurantDetails = restaurant.data[0].attributes;

  return (
    <div>
      <div className="hero container mx-auto pt-[140px] w-full">
        <Image
          src={imageToUrl(restaurantDetails.banner)}
          width={restaurantDetails.banner.data.attributes.width}
          height={473}
          alt={restaurantDetails.name}
          className=" rounded-2xl"
        />
      </div>
      <div className="container my-12 mx-auto">
        <h2 className="font-hotpizza text-2xl">
          Welcome to {restaurantDetails.name}
        </h2>
      </div>

      <h2 className=" font-hotpizza text-2xl mb-5 container mt-12">All</h2>
      <ItemsGrid dishes={restaurantDetails.dishes} />
      <Weekly />
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/restaurants?filters[slug][$eq]=${pageSlug}&populate=deep,4`
  );

  const restaurant = await response.data;

  return {
    props: {
      restaurant: restaurant,
    },
  };
};

export default Restaurant;
