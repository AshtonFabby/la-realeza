import Image from "next/image";
import Link from "next/link";
const RestaurantItem = (props) => {
  return (
    <Link href={`/restaurant/${props.restaurantId}`} className="cursor-pointer">
      <a>
        <div className="restaurant w-full sm:w-[340px] h-[170px] rounded-2xl">
          <Image
            src={props.imageUrl}
            width={348}
            height={180}
            alt=""
            className="rounded-2xl"
          />
        </div>
      </a>
    </Link>
  );
};

export default RestaurantItem;
