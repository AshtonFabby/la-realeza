import axios from "axios";
import Link from "next/link";

const User = ({ user }) => {
  console.log(user);
  return (
    <main className="pt-[80px] md:pt-[150px] container mx-auto">
      <title>User</title>
      <h2 className=" font-hotpizza text-4xl">User Details</h2>
      <div className="content w-[624px] bg-white rounded-2xl mx-auto p-20 ">
        <div className="image">
          <svg
            className=" text-8xl hover:text-mustard-red mx-auto"
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
          <h3 className=" font-medium text-center text-xl">{user.username}</h3>
          <h2 className="font-medium mb-3">Delivery address</h2>
          <p>{user?.addresses[0]?.address}</p>
          <p>{user?.addresses[0]?.street}</p>
          <p>{user?.addresses[0]?.city}</p>
          <p className=" mb-5">{user?.addresses[0]?.country}</p>
          <Link href="/add_address" className="text-center w-min my-2">
            <a className=" text-mustard-red font-bold hover:text-black">
              add address
            </a>
          </Link>
          <h2 className="font-medium mt-3">Phone Number</h2>

          <p>{user.phone_number}</p>

          <div className=" flex justify-center">
            <button className="mt-5 hover:text-mustard-red">LogOut</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default User;

export const getServerSideProps = async (context) => {
  const { req } = context;

  const userId = req.cookies["uid"];

  const jwt = req.cookies["jwt"];

  const token = jwt;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(
    `${process.env.STRAPI_PUBLIC_URL}/users/${userId}?populate=deep,2`,
    config
  );

  const user = await response.data;
  return {
    props: {
      user: user,
    },
  };
};
