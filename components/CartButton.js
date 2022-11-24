import Image from "next/image";
import Link from "next/link";
const CartButton = () => {
  return (
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
  );
};

export default CartButton;
