import Image from "next/image";
import Link from "next/link";
const RestaurantItem = (props) => {
  return (
    <Link href="/restaurant" className="cursor-pointer">
      <div className="restaurant w-full sm:w-[340px] h-[170px] rounded-2xl">
        <Image
          src={props.imageUrl}
          width={348}
          height={180}
          alt="chicken inn"
        />
      </div>
    </Link>
  );
};

export default RestaurantItem;
