import Image from "next/image";
import CartButton from "../components/CartButton";

const Order = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <h1 className=" font-hotpizza text-2xl mb-5 pt-20 sm:pt-[150px]">
          Order Details
        </h1>

        <div className=" lg:flex gap-5 mb-28">
          <div className="product-image rounded-2xl h-min w-full mb-3">
            <Image
              src="/assets/images/burger.png"
              height={418}
              width={628}
              alt="order image"
              className=" object-fill"
            />
          </div>

          <div className="product-details w-full h-min bg-white p-5 lg:p-10  rounded-2xl">
            <div className="flex justify-between mb-5">
              <h2 className=" font-medium text-xl capitalize">burger</h2>
              <p className=" text-xl">$200</p>
            </div>
            <p className="mb-5">
              Scelerisque augue commodo eleifend ornare mauris enim. Placerat
              tempus ac sed felis. Lobortis vulputate nunc interdum netus sit
              sed venenatis. Nullam.
            </p>
            <CartButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
