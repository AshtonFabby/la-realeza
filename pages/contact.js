import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <main className="container">
      <Head>
        <title>Contact</title>
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
          <form method="POST" className=" md:w-1/2">
            <h2 className=" text-xl text-center my-5">Send us a message</h2>

            <input
              type="text"
              name="name"
              placeholder="Name"
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <textarea
              name="message"
              className="w-full rounded-lg mb-2 px-2"
              placeholder="Message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>

            <button
              type="submit"
              className=" text-center w-full bg-mustard-red h-10 rounded-xl text-white hover:bg-red-500 mt-2 mb-10"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
