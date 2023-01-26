import CartItem from "../components/cartItem";

import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/router";

import { useCart } from "react-use-cart";
import { twoDecimals } from "../lib/helpers";
import axios from "axios";
import { useState } from "react";

const Cart = ({ user, userAuth }) => {
  const [address, setAddress] = useState(3);
  const [payment, setPayment] = useState("ecocash");
  const { items, cartTotal, totalItems, emptyCart } = useCart();
  const addresses = user.addresses;
  const router = useRouter();
  const placeOrder = async () => {
    if (totalItems == 0) {
      alert("Cart is Empty");
    } else {
      const config = {
        headers: { Authorization: `Bearer ${userAuth}` },
      };

      try {
        const order = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/orders`,
          {
            data: {
              name: user.username,
              order: [
                {
                  order: items,
                },
              ],
              address: address,
            },
          },
          config
        );
        if (order.status === 200) {
          emptyCart();
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="pt-[80px] md:pt-[150px]">
        <h1 className=" text-2xl mb-[50px] container mx-auto">Order details</h1>

        <div className="container mx-auto md:flex gap-5">
          <div className="top lg:w-2/3">
            <div className="flex mb-3 justify-between">
              <h3 className=" font-semibold text-xs w-2/5">Product Details</h3>
              <h3 className=" font-semibold text-xs text-center w-1/6">
                Quantity
              </h3>
              <h3 className=" font-semibold text-xs text-center w-1/6">
                Price
              </h3>
              <h3 className=" font-semibold text-xs text-center w-1/6">
                Total
              </h3>
              <h3 className=" font-semibold text-xs text-center w-1/6">
                Remove
              </h3>
            </div>
            <div className=" flex flex-col gap-2">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  itemId={item.id}
                  price={item.price}
                  name={item.title}
                  quantity={item.quantity}
                  total={item.itemTotal}
                />
              ))}
            </div>
          </div>
          <div className="bottom mt-5 w-full md:w-[348px] p-3 bg-white rounded-xl py-8 md:p-7 lg:w-1/3">
            <h2 className=" font-semibold">Order summary</h2>
            <div className=" flex justify-between mt-8">
              <p className=" text-sm">Grand Total</p>
              <p className=" text-mustard-red text-sm">
                {"$" + twoDecimals(cartTotal)}
              </p>
            </div>
            <div className=" flex justify-between items-center">
              <p className=" text-sm mt-4 font-semibold">Delivery Address</p>
              <Link href={"/add_address"}>
                <a className=" text-mustard-red text-sm">add address</a>
              </Link>
            </div>
            <select
              name="address"
              id="address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className=" w-full bg-white text-sm mt-4 "
            >
              <option value="3">Self Collection</option>
              {addresses.map((address) => (
                <option key={address.id} value={address.id}>
                  {address.name}
                </option>
              ))}
              {/* <option value="default">Default</option>
              <option value="option 2">Option 2</option>
              <option value="option 2">Option 3</option> */}
            </select>

            <p className=" text-sm mt-4 font-semibold">Payment Method</p>

            <select
              name="method"
              id="method"
              value={payment}
              onChange={(e) => {
                setPayment(e.target.value);
              }}
              className=" w-full bg-white text-sm mt-4 mb-28 "
            >
              {/* <option value="ecocash">EcoCash</option> */}
              <option value="cash">Cash On Delivery</option>
            </select>

            <button
              onClick={placeOrder}
              className=" w-full bg-mustard-red text-white py-3 rounded-xl font-semibold"
            >
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

export const getServerSideProps = async (context) => {
  const { req } = context;

  const userId = req.cookies["uid"];

  const jwt = req.cookies["jwt"];

  const token = jwt;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/users/${userId}?populate=deep,3`,
    config
  );

  const user = await response.data;
  return {
    props: {
      user: user,
      userAuth: token,
    },
  };
};
