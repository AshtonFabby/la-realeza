import Image from "next/image";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = () => {
  return (
    <div className=" flex flex-col sm:flex-row gap-5 justify-center sm:justify-between container mx-auto">
      <RestaurantItem imageUrl="/assets/images/chicken-inn.png" />
      <RestaurantItem imageUrl="/assets/images/steers.png" />
      <RestaurantItem imageUrl="/assets/images/grill-shack.png" />
    </div>
  );
};

export default RestaurantList;
