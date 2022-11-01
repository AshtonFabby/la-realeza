import Image from "next/image";
import Link from "next/link";
import { twoDecimals } from "../lib/helpers";
import CartButton from "./CartButton";

const MenuItem = (props) => {
  return (
    <Link href={`/order/${props.dishId}`}>
      <a>
        <div className=" w-[256px]  bg-white rounded-xl cursor-pointer hover:shadow-md">
          <div className="menu-image w-[256px] h-[152px] relative">
            <div className="absolute top-0 left-0">
              <Image
                className=" rounded-t-xl "
                src={props.mealImage}
                alt={props.slug}
                height={152}
                width={256}
              />
            </div>
            <div className="absolute top-0 left-0 mt-3 ml-3">
              <Image
                className=" rounded-full "
                src={props.iconImage}
                alt=""
                height={40}
                width={40}
              />
            </div>
          </div>
          <div className="content p-5">
            <h3 className=" text-xl font-medium h-[56px]">{props.title}</h3>
            <div className=" flex justify-between">
              <p className="text-lg mt-2">{"$" + twoDecimals(props.price)}</p>
              <CartButton />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default MenuItem;
