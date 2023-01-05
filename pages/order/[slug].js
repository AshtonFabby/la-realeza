import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { imageToUrl, twoDecimals } from "../../lib/helpers";

import { useCart } from "react-use-cart";

const Order = ({ dish }) => {
  const dishDetails = dish.data.attributes;
  const router = useRouter();
  const { addItem } = useCart();

  return (
    <div>
      <div className="container mx-auto">
        <h1 className=" font-hotpizza text-2xl mb-5 pt-20 sm:pt-[150px]">
          Order Details
        </h1>

        <div className=" lg:flex gap-5 mb-28">
          <div className="product-image rounded-2xl h-min w-full mb-3">
            <Image
              src={imageToUrl(dishDetails.image)}
              height={418}
              width={628}
              alt="order image"
              className=" object-fill rounded-2xl "
            />
          </div>

          <div className="product-details w-full h-min bg-white p-5 lg:p-10  rounded-2xl">
            <h1 className=" font-hotpizza text-2xl mb-5">
              {dishDetails.restaurant.data.attributes.name}
            </h1>
            <div className="flex justify-between mb-5">
              <h2 className=" font-medium text-xl capitalize">
                {dishDetails.title}
              </h2>
              <p className=" text-xl">{"$" + twoDecimals(dishDetails.price)}</p>
            </div>
            <p className="mb-5">{dishDetails.description}</p>
            <div className=" flex justify-between ">
              <button
                onClick={() => {
                  addItem(
                    {
                      id: dish.data.id,
                      title: dishDetails.title,
                      price: dishDetails.price,
                    },
                    1
                  );
                  router.push("/cart");
                }}
                className=" cursor-pointer w-10 h-10 bg-mustard-red rounded-full flex justify-center items-center"
              >
                <Image
                  src="/assets/svg/white-cart.svg"
                  height={22}
                  width={22}
                  alt="shopping cart "
                />
              </button>
              <button
                className="hover:text-mustard-red"
                onClick={() => {
                  addItem(
                    {
                      id: dish.data.id,
                      title: dishDetails.title,
                      price: dishDetails.price,
                    },
                    1
                  );
                  alert("Item added to cart");
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/dishes/${pageSlug}?populate=deep,3`
  );

  const dish = response.data;

  return {
    props: {
      dish: dish,
    },
  };
};

export default Order;
