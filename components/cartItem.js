import Image from "next/image";
import { useCart } from "react-use-cart";
const CartItem = (props) => {
  const { removeItem } = useCart();
  return (
    <div className="flex p-3 bg-white rounded-xl">
      <div className=" text-xs w-2/5 flex gap-2">
        {/* <Image src={props.icon} alt="" height={30} width={30} /> */}
        <h3 className=" my-auto">{props.name}</h3>
      </div>

      <h3 className=" text-xs text-center w-1/5 my-auto">{props.quantity}</h3>
      <h3 className=" text-xs text-center w-1/5 my-auto">{props.price}</h3>
      <h3 className=" text-xs text-center w-1/5 my-auto">{props.price}</h3>
      <button
        onClick={() => {
          removeItem(props.itemId);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
