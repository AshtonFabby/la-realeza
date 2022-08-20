import Image from "next/image";

const Category = (props) => {
  return (
    <div className=" w-44 h-48 bg-white rounded-lg flex justify-center items-center text-center cursor-pointer hover:shadow-md">
      <div className="category-image">
        <Image src={props.categoryImage} width={107} height={75} alt="" />
        <p className=" text-lg mt-3">{props.category}</p>
      </div>
    </div>
  );
};

export default Category;
