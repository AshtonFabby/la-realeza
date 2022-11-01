import Image from "next/image";
import { imageToUrl } from "../lib/helpers";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = (props) => {
  return (
    <div className=" flex flex-col sm:flex-row gap-5 justify-center sm:justify-between container mx-auto">
      {props.restaurants.data.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurantId={restaurant.attributes.slug}
          imageUrl={imageToUrl(restaurant.attributes.card)}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
