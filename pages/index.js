// import Head from 'next/head'
import Image from "next/image";
import CategoriesList from "../components/CategoriesList";
import HeroSection from "../components/HeroSection";
import ItemsGrid from "../components/ItemsGrid";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container my-12 mx-auto">
        <h2 className=" font-hotpizza text-2xl">Welcome to Realeza</h2>
      </div>
      <CategoriesList />
      <ItemsGrid />
      <div className="container mx-auto">
        <div className="featured p-9 w-full h-[469px] bg-[url('/assets/images/featured.png')] bg-no-repeat bg-cover bg-center rounded-xl">
          <div className="content flex items-center gap-8">
            <Image
              src="/assets/images/icon.png"
              height={84}
              width={84}
              alt="icon"
            />
            <div>
              <h3 className=" text-2xl text-white font-medium">Featured</h3>
              <p className=" text-white text-lg"> meal of the week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
