import Image from "next/image";
import ItemsGrid from "../components/ItemsGrid";
import Weekly from "../components/Weekly";

const Restaurant = () => {
  return (
    <div>
      <div className="hero container mx-auto pt-[140px]">
        <Image
          src="/assets/images/chicken-inn-banner.png"
          width={1084}
          height={473}
          alt="restaurant image"
        />
      </div>
      <ItemsGrid />
      <Weekly />
    </div>
  );
};

export default Restaurant;
