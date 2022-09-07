import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" sm:flex hidden justify-between mx-auto py-10 z-10 absolute left-0 right-0 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
      <Link href="/">
        <div>
          <div className="logo flex items-center gap-5 cursor-pointer ">
            <Image
              src="/assets/svg/shark.svg"
              width={85}
              height={62}
              alt="shark"
            />
            <p className=" font-hotpizza text-2xl hidden lg:block">
              La Realeza
            </p>
          </div>
        </div>
      </Link>
      <div className="nav-items flex items-center justify-center text-xl gap-12">
        <Link href="/">
          <p className=" cursor-pointer hover:font-semibold ease-in-out m-2">
            Home
          </p>
        </Link>
        <Link href="/menu">
          <p className=" cursor-pointer hover:font-semibold ease-in-out m-2">
            Menu
          </p>
        </Link>
        <p className=" cursor-pointer hover:font-semibold ease-in-out m-2">
          About
        </p>
        <p className=" cursor-pointer hover:font-semibold ease-in-out m-2">
          Contact
        </p>
      </div>
      <div className="nav-end flex gap-2 ">
        <Image src="/assets/svg/user.svg" width={30} height={30} alt="shark" />
        <Image src="/assets/svg/cart.svg" width={30} height={30} alt="shark" />
      </div>
    </nav>
  );
};

export default Navbar;
