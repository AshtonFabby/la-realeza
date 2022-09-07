import Image from "next/image";
const CartItem = () => {
  return (
    <div className="flex p-3 bg-white rounded-xl">
      <div className=" text-xs w-2/5 flex gap-2">
        <Image
          src="/assets/images/cart-item.png"
          alt=""
          height={30}
          width={30}
        />
        <h3 className=" my-auto">Pizza</h3>
      </div>
      <div className=" text-xs text-center w-1/5 my-auto">
        <input
          type="number"
          name="quantity"
          id="quantity"
          defaultValue={1}
          className=" w-full text-center"
        />
      </div>
      <h3 className=" text-xs text-center w-1/5 my-auto">$100</h3>
      <h3 className=" text-xs text-center w-1/5 my-auto">100</h3>
    </div>
  );
};

export default CartItem;
