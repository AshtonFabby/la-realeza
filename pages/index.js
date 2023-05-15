import axios from "axios";
import Head from "next/head";
import HeroSection from "../components/HeroSection";
import ItemsGrid from "../components/ItemsGrid";
import Weekly from "../components/Weekly";
// import { MeiliSearch } from "meilisearch";

export default function Home({dishes, weekly}) {
    // const client = new MeiliSearch({
    //   host: process.env.NEXT_PUBLIC_MEILISEARCH_URL,
    //   apiKey: process.env.MASTER_KEY,
    // });
    return (
        <main>
            <Head>
                <title>Home</title>
            </Head>
            {/* <button onClick={makePayment}> call pay</button> */}
            <HeroSection/>
            <div className="container my-12 mx-auto md:flex justify-between">
                <h2 className=" font-hotpizza text-2xl">Welcome to LaRealeza</h2>
                <div className=" flex flex-row h-min items-center justify-center mt-5 md:mt-0 rounded-lg bg-white">
                    <input className=" py-3 px-5 w-[230px] rounded-lg" placeholder="search..."/>
                    <button className=" p-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            {/* <CategoriesList /> */}
            <ItemsGrid dishes={dishes}/>
            <Weekly weekly={weekly}/>
        </main>
    );
}

export const getStaticProps = async () => {
    const response = await axios.get(
        `${process.env.STRAPI_PUBLIC_URL}/dishes?populate=deep,3`
    );
    const response2 = await axios.get(
        `${process.env.STRAPI_PUBLIC_URL}/weeklies?populate=deep,3`
    );

    const dishes = await response.data;
    const weekly = await response2.data;
    return {
        props: {
            dishes: dishes,
            weekly: weekly,
        },
    };
};
