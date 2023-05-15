import Image from "next/image";
import Link from "next/link";
import { twoDecimals } from "../lib/helpers";
// import CartButton from "./CartButton";

import { useCart } from "react-use-cart";

const MenuItem = (props) => {
  const { addItem } = useCart();

  return (
    <Link href={`/order/${props.dishId}`}>
      <div className=" w-[256px]  bg-white rounded-xl cursor-pointer hover:shadow-md">
        <div className="menu-image w-[256px] h-[152px] relative">
          <div className="absolute top-0 left-0">
            <Image
              className=" rounded-t-xl w-[256px] h-[152px] object-cover"
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
          <h3 className=" lowercase text-xl font-medium h-[56px]">
            {props.title}
          </h3>
          <div className=" flex justify-between z-10">
            <p className="text-lg mt-2">{"$" + twoDecimals(props.price)}</p>
            <Link href={"/cart"}>
              <button className=" cursor-pointer w-10 h-10 bg-mustard-red rounded-full flex justify-center items-center">
                <Image
                  src="/assets/svg/white-cart.svg"
                  height={22}
                  width={22}
                  alt="shopping cart "
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
