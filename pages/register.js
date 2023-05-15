import axios from "axios";
import Cookies from "js-cookie";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { useState } from "react";

const Register = () => {
  const [username, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const registerUser = async () => {
    if (username === "" || password === "" || email === "" || username === "") {
      setMessage("All fields needs to be filled");
    } else {
      try {
        const user = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
          {
            username: username,
            phone_number: phoneNumber,
            email: email,
            password: password,
          }
        );
        if (user.status === 200) {
          await axios.post("/api/login", {jwt: user.data.jwt});
          Cookies.set("uid", user.data.user.id, { expires: 30 });
          Cookies.set("username", user.data.user.username, { expires: 30 });
          Cookies.set("logIn", true, { expires: 30 });
          await router.push("/user");
        }
      } catch (error) {
        // console.log(error.response);

        setMessage(error.response.data.error.message);
      }
    }
  };

  return (
    <main>
      <Head>
        <title>Register</title>
      </Head>
      <div className="container content pt-[80px] md:pt-[150px]">
        <div className="left flex flex-col md:flex-row justify-center items-center md:gap-12 xl:h-[500px]">
          <Image
            width={463}
            height={446}
            alt="man with pizza"
            className=""
            src="/assets/svg/hero.svg"
          />
          <form method="POST" className=" md:w-1/2" onSubmit={handleSubmit}>
            <h2 className=" text-xl text-center my-5">Register</h2>
            <p className=" text-mustard-red my-3">{message}</p>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <input
              type="password"
              name="password-confirm"
              placeholder="Confirm Password"
              id="password-confirm"
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <button
              type="submit"
              onClick={registerUser}
              className=" text-center w-full bg-mustard-red h-10 rounded-xl text-white hover:bg-red-500 mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
