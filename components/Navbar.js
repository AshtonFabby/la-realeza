import Image from "next/image";
import Link from "next/link";
import { useCart } from "react-use-cart";
import Cookies from "js-cookie";

const Navbar = () => {
  const status = Cookies.get("logIn");
  const { totalItems } = useCart();

  // console.log(totalItems);

  return (
    <div className=" sm:flex justify-between mx-auto py-10 z-10 absolute left-0 right-0 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 bg-white sm:bg-transparent">
      <Link href="/">
        <a>
          <div className="logo flex items-center gap-5 cursor-pointer">
            <Image
              src="/assets/svg/shark.svg"
              width={75}
              height={52}
              alt="shark"
            />
            <p className=" font-hotpizza text-2xl hidden lg:block">
              La Realeza
            </p>
          </div>
        </a>
      </Link>
      <div className="nav-items flex flex-col sm:flex-row items-center justify-center text-xl gap-5 sm:gap-12">
        <Link href="/">
          <a>
            <div>
              <p className=" cursor-pointer hover:text-mustard-red ease-in-out duration-200 m-2">
                Home
              </p>
            </div>
          </a>
        </Link>
        <Link href="/menu">
          <a>
            <div>
              <p className=" cursor-pointer hover:text-mustard-red ease-in-out duration-200 m-2">
                Menu
              </p>
            </div>
          </a>
        </Link>
        <a>
          <div>
            <p className=" cursor-pointer hover:text-mustard-red ease-in-out duration-200 m-2">
              About
            </p>
          </div>
        </a>
        <a>
          <div>
            <p className=" cursor-pointer hover:text-mustard-red ease-in-out duration-200 m-2">
              Contact
            </p>
          </div>
        </a>
      </div>
      <div className="nav-end flex gap-5 sm:gap-2 justify-center items-center justify-items-center mt-5 sm:mt-0 ">
        {status == undefined ? (
          <Link href="/login">
            <a>
              <div>Log In</div>
            </a>
          </Link>
        ) : (
          <div className=" flex gap-2">
            <Link href="/user">
              <a>
                <div className=" relative">
                  <svg
                    className=" text-4xl hover:text-mustard-red"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"
                    />
                  </svg>
                </div>
              </a>
            </Link>
            <Link href="/cart">
              <a>
                <div className=" relative">
                  <svg
                    className=" text-3xl hover:text-mustard-red"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM3.625 17L6.6 11.6L3 4H1V2h3.25l.95 2h16.5l-4.975 9H8.1L7 15h12v2Zm4.925-6h7Z"
                    />
                  </svg>
                  <div className=" flex justify-center items-center rounded-full p-1 text-white bg-red-500 text-xs -mt-12 ml-6 absolute ">
                    {totalItems}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        )}

        {/* <Image src="/assets/svg/cart.svg" width={30} height={30} alt="cart" /> */}
      </div>
    </div>
  );
};

export default Navbar;
