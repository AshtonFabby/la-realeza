import Image from "next/image";

const Register = () => {
  return (
    <div className="container">
      <div className="content pt-[80px] md:pt-[150px]">
        <div className="left flex flex-col md:flex-row justify-center">
          <Image
            width={263}
            height={246}
            alt="man with pizza"
            className=""
            src="/assets/svg/hero.svg"
          />
          <form action="#">
            <h2 className=" text-xl text-center mt-5">Register</h2>

            <label htmlFor="userName" className=" text-xs font-light">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <label htmlFor="email" className=" text-xs font-light">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <label htmlFor="password" className=" text-xs font-light">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <label htmlFor="password-confirm" className=" text-xs font-light">
              Password Confirm
            </label>
            <input
              type="password"
              name="password-confirm"
              id="password-confirm"
              className=" w-full rounded-lg h-10 mb-2 px-2"
            />
            <button
              type="submit"
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

export default Register;
