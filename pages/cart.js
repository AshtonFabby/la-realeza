import CartItem from "../components/cartItem";

import Image from "next/image";

import link from "next/link";
import Link from "next/link";

const Cart = () => {
  return (
    <div>
      <div className="pt-[80px] md:pt-[150px]">
        <h1 className=" text-2xl mb-[50px] container mx-auto">Order details</h1>

        <div className="container mx-auto md:flex gap-5">
          <div className="top my-auto lg:w-2/3">
            <div className="flex mb-3 ">
              <h3 className=" font-semibold text-xs w-2/5">Product Details</h3>
              <h3 className=" font-semibold text-xs text-center w-1/5">
                Quantity
              </h3>
              <h3 className=" font-semibold text-xs text-center w-1/5">
                Price
              </h3>
              <h3 className=" font-semibold text-xs text-center w-1/5">
                Total
              </h3>
            </div>
            <div className=" flex flex-col gap-3">
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>
          <div className="bottom mt-5 w-full md:w-[348px] p-3 bg-white rounded-xl py-8 md:p-7 lg:w-1/3">
            <h2 className=" font-semibold">Order summary</h2>
            <div className=" flex justify-between mt-8">
              <p className=" text-sm">Grand Total</p>
              <p className=" text-mustard-red text-sm">$300</p>
            </div>
            <p className=" text-sm mt-4 font-semibold">Delivery Address</p>

            <select
              name="address"
              id="address"
              className=" w-full bg-white text-sm mt-4 "
            >
              <option value="default">Default</option>
              <option value="option 2">Option 2</option>
              <option value="option 2">Option 3</option>
            </select>

            <p className=" text-sm mt-4 font-semibold">Payment Method</p>

            <select
              name="method"
              id="method"
              className=" w-full bg-white text-sm mt-4 mb-28 "
            >
              <option value="default">EcoCash</option>
            </select>

            <button className=" w-full bg-mustard-red text-white py-3 rounded-xl font-semibold">
              Place Order
            </button>
          </div>
        </div>
        <div className=" container">
          <Link href="/">
            <a>
              <div className=" flex gap-2">
                <Image
                  src="/assets/svg/back-arrow.svg"
                  height={8}
                  width={14}
                  alt="back arrow"
                />
                <p className=" text-lg">Continue Shopping</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
