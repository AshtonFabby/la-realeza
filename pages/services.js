import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <main>
      <Head>
        <title>Services</title>
      </Head>
      <main className=" mx-auto py-[80px] skew-y-1 pt-[100px]">
        <div className="container py-14 bg-[#bbca63] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20">
          <div className="w-[230px] md:w-[250px]">
            <Image
              src="/assets/images/pizza-man.png"
              alt="man holding pizza"
              width={526}
              height={526}
            />
          </div>
          <div>
            <h4 className="md:text-4xl text-3xl font-bold">
              Your food is just one click away
            </h4>
            <Link href="/coming_soon">
              <a>
                <button className="bg-white p-2 px-4 rounded-lg mt-8">
                  Visit Shop
                </button>
              </a>
            </Link>
          </div>
        </div>

        <div className="container py-14 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20">
          <div>
            <h4 className="md:text-4xl text-3xl font-bold">
              Your your groceries are <br /> just one click away
            </h4>
            <Link href="/coming_soon">
              <a>
                <button className="bg-mustard-red text-white p-2 px-4 rounded-lg mt-8">
                  Visit Shop
                </button>
              </a>
            </Link>
          </div>
          <div className="w-[230px] md:w-[250px]">
            <Image
              src="/assets/images/groceries-man.png"
              alt="man holding pizza"
              width={526}
              height={526}
            />
          </div>
        </div>

        <div className="container py-14 bg-[#feca17] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20">
          <div className="w-[230px] md:w-[250px]">
            <Image
              src="/assets/images/wine-man.png"
              alt="man holding pizza"
              width={526}
              height={526}
            />
          </div>
          <div>
            <h4 className="md:text-4xl text-3xl font-bold">
              Get your liquor here <br /> for cheap
            </h4>
            <Link href="/coming_soon">
              <a>
                <button className="bg-white p-2 px-4 rounded-lg mt-8">
                  Visit Shop
                </button>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </main>
  );
};
export default Services;
