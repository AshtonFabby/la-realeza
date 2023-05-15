import axios from "axios";
import HistoryItem from "../components/historyItem";
import {formatMyDate, twoDecimals} from "../lib/helpers";

const History = ({ orders }) => {
  const ordersData = orders.data;
  return (
    <div className=" container content pt-[100px] md:pt-[150px] h-[80vh]">
      <h1 className=" text-center text-2xl font-hotpizza">Order History</h1>

      <div className="top">
        <div className="flex mb-3 justify-between p-3">
          <h3 className=" font-semibold text-xs w-2/5">Order Details</h3>
          <h3 className=" font-semibold  text-xs text-center w-1/6">Price</h3>
          <h3 className=" font-semibold text-xs text-center w-1/6">Quantity</h3>

          <h3 className=" font-semibold  text-xs text-center w-1/6">
            Total Price
          </h3>
        </div>
        <div className=" flex flex-col gap-8 justify-between ">
          {ordersData.map((order) => (
            <div key={order.id}>
              <h1 className=" text-xs">
                {formatMyDate(order.attributes.createdAt)}
              </h1>

              {order.attributes.order.map((orderData) => (
                <HistoryItem
                  key={orderData.id}
                  name={orderData.title}
                  price={twoDecimals(orderData.price)}
                  quantity={orderData.quantity}
                  totalPrice={twoDecimals(orderData.itemTotal)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;

export const getServerSideProps = async (context) => {
  const { req } = context;

  const username = req.cookies["username"];

  const token = req.cookies["jwt"];
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/orders?filters[name][$eq]=${username}`,
    config
  );

  const orders = await response.data;
  return {
    props: {
      orders: orders,
    },
  };
};
