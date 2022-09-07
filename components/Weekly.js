import Image from "next/image";
const Weekly = () => {
  return (
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
  );
};

export default Weekly;
