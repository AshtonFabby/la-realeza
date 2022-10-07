import Image from "next/image";
import { useEffect, useState } from "react";
import CartButton from "../../components/CartButton";
import client from "../../utils/client";
import { imageUrl } from "../../utils/image";

// export const getServerSideProps = async (pageContext) => {
//   const pageSlug = pageContext.query.slug;
//   const query = `*[_type == "dish" && slug.current == "${pageSlug}"]{image, price, title }`;



//   const dish = await client.fetch(query, { pageSlug });

//   console.log(dish);


//   if ((!dish)) {
//     return {
//       props: null,
//       notFound: true
//     }
//   } else {
//     return {
//       props: {
//         title: "hello world",
//         image: "hello",
//         description: "hello world",
//         price: "hello",

//       }
//     }
//   }
// }

const Order = (props) => {

  const { slug } = props;

  const { state, setState } = useState({
    dish: null,
    loading: true,
    error: "",
  });
  const { dish, loading, error } = state;

  useState(() => {
    const fetchData = async () => {
      try {
        const dish = await client.fetch(`*[_type == "dish" && slug.current == $slug][0]`, { slug });
        console.log(dish);
        setState({
          ...state, dish, loading: false,
        })

      } catch (err) { }
    };

  }, [])



  return (


    <div>

      <div className="container mx-auto ">
        <h1 className=" font-hotpizza text-2xl mb-5 pt-20 sm:pt-[150px]">
          Order Details
        </h1>

        <div className=" lg:flex gap-5 mb-28">
          <div className="product-image rounded-2xl h-min w-full mb-3">
            {/* <Image
                src={imageUrl(dish.image)}
                height={418}
                width={628}
                alt="order image"
                className=" object-fill"
              /> */}
          </div>

          <div className="product-details w-full h-min bg-white p-5 lg:p-10  rounded-2xl">
            <div className="flex justify-between mb-5">
              <h2 className=" font-medium text-xl capitalize"></h2>
              <p className=" text-xl">$</p>
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


export function getServerSideProps(context) {
  return {
    props: {
      slug: context.params.slug,

    }

  }
}