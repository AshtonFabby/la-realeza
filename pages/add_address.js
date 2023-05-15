import axios from "axios";
import Image from "next/image";
import Cookies from "js-cookie";
import {useState} from "react";
import {useRouter} from "next/router";

const AddAddress = ({ userAuth }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const addUserAddress = async () => {
    const uid = Cookies.get("uid");
    // console.log(uid);

    if (
      name === "" ||
      street === "" ||
      city === "" ||
      country === "" ||
      address === ""
    ) {
      setMessage("All fields needs to be filled");
    } else {
      const config = {
        headers: { Authorization: `Bearer ${userAuth}` },
      };
      try {
        const user = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/addresses`,
          {
            data: {
              name: name,
              address: address,
              city: city,
              street: street,
              country: country,
              users_permissions_user: uid,
            },
          },
          config
        );

        if (user.status === 200) {
          await router.push("/user");
        }
      } catch (error) {
        console.log(error.response);
        setMessage("Please enter valid details");
      }
    }
  };

  return (
    <div className="container">
      <div className="content pt-[80px] md:pt-[150px]">
        <div className="left flex flex-col md:flex-row justify-center items-center md:gap-12 xl:h-[500px]">
          <Image
            width={463}
            height={446}
            alt="man with pizza"
            className=""
            src="/assets/svg/hero.svg"
          />
          <form method="POST" className=" md:w-1/2" onSubmit={handleSubmit}>
            <h2 className=" text-xl text-center my-5">Add Address</h2>
            <p className=" text-mustard-red my-3">{message}</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <textarea
              className="w-full rounded-lg p-2"
              placeholder="Address"
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <button
              type="submit"
              onClick={addUserAddress}
              className=" text-center w-full bg-mustard-red h-10 rounded-xl text-white hover:bg-red-500 mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;

export const getServerSideProps = async (context) => {
  const { req } = context;

  const token = req.cookies["jwt"];

  return {
    props: {
      userAuth: token,
    },
  };
};
