import Image from "next/image";
import { imageToUrl } from "../lib/helpers";
const Weekly = (props) => {
  return (
    <div className="container mx-auto">
      <div className={`featured w-full`}>
        <div className="content flex items-center gap-8 mb-5">
          <div>
            <h3 className=" text-2xl font-medium">Featured</h3>
            <p className=" text-lg"> restaurant of the week</p>
          </div>
        </div>
        <Image
          src={imageToUrl(
            props.weekly.data[0].attributes.restaurant.data.attributes.banner
          )}
          height={469}
          width={1344}
          alt="icon"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Weekly;
