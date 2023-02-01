import DownloadButton from "./DownloadButton";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=' h-min bg-[url("/assets/images/header-bg.png")] bg-no-repeat bg-cover pt-[80px] md:pt-[150px]'>
      <div className=" flex flex-col-reverse md:flex-row items-center gap-10 container mx-auto pb-5">
        <div className="right mt-16 md:mt-0">
          <p className=" font-hotpizza text-5xl leading-[3.5rem] mb-6">
            Food delivered <br /> at the
            <span className=" text-mustard-red"> speed</span> <br /> of a click{" "}
            <span>
              <Image
                src={"/assets/svg/click.svg"}
                alt="click"
                height={40}
                width={40}
              />
            </span>
          </p>
          <div className="buttons flex gap-5 flex-col lg:flex-row">
            <DownloadButton
              icon="/assets/svg/apple.svg"
              topText="Download on the"
              bottomText="AppStore"
            />
            <DownloadButton
              icon="/assets/svg/playstore.svg"
              topText="Get it on the"
              bottomText="PlayStore"
            />
          </div>
        </div>
        <div className="left ml-52 hidden lg:block">
          <Image
            width={483}
            height={466}
            alt="man with pizza"
            className=""
            src="/assets/svg/hero.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
