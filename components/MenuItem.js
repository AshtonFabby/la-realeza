import Image from "next/image";
import Link from "next/link";
import CartButton from "./CartButton";

const MenuItem = (props) => {
  return (
    <Link href={"/order"}>
      <div className=" w-[256px] h-[271px] bg-white rounded-xl cursor-pointer hover:shadow-md">
        <div className="menu-image w-[256px] h-[152px] relative">
          <div className="absolute top-0 left-0">
            <Image
              className=" rounded-t-xl "
              src={props.mealImage}
              alt=""
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
          <div className=" flex justify-between">
            <h3 className=" text-xl font-medium">{props.title}</h3>
            <CartButton />
          </div>
          <p className="text-xs mt-2">{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
