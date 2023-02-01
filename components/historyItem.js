const HistoryItem = (props) => {
  return (
    <div className="flex p-3 mt-2 bg-white rounded-xl justify-between">
      <h3 className="text-xs w-2/5">{props.name}</h3>

      <h3 className=" text-xs  text-center w-1/6">{props.price}</h3>
      <h3 className=" text-xs  text-center w-1/6">{props.quantity}</h3>
      <h3 className=" text-xs  text-center w-1/6">{props.totalPrice}</h3>
    </div>
  );
};

export default HistoryItem;
