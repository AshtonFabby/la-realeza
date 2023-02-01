import axios from "axios";
import Image from "next/image";
import { useState } from "react";

import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";
import Head from "next/head";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const router = useRouter();

  const loginUser = async () => {
    if (identifier == "" || password == "") {
      setMessage("username or password can't be empty");
    } else {
      try {
        const user = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
          {
            identifier: identifier,
            password: password,
          }
        );

        if (user.status === 200) {
          Cookies.set("uid", user.data.user.id, { expires: 30 });
          Cookies.set("username", user.data.user.username, { expires: 30 });
          Cookies.set("logIn", true, { expires: 30 });
          axios.post("/api/login", { jwt: user.data.jwt });
          router.push("/");
        } else {
          setMessage("something went wrong");
        }
      } catch (error) {
        // console.log(error.response.data.error.message);

        setMessage("username or password is incorrect");
      }
    }
  };
  return (
    <main className="container">
      <Head>
        <title>Login</title>
      </Head>
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
            <h2 className=" text-xl text-center my-5">LogIn</h2>
            <p className=" text-mustard-red my-3">{message}</p>
            <input
              type="text"
              name="username"
              placeholder="Username or Email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
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

            <button
              type="submit"
              onClick={loginUser}
              className=" text-center w-full bg-mustard-red h-10 rounded-xl text-white hover:bg-red-500 mt-2 mb-10"
            >
              Submit
            </button>

            <Link href="/register">
              <a className="hover:text-mustard-red duration-200 text-gray-800">
                I {"don't"} have an account
              </a>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
