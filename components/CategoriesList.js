import Category from "./Category";

const CategoriesList = () => {
  return (
    <div className="container mx-auto my-12 grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 md:grid-cols-4 gap-5 justify-between justify-items-center xl:mx-auto">
      <Category category="all" categoryImage="/assets/svg/all.svg" />
      <Category category="burger" categoryImage="/assets/svg/burger.svg" />
      <Category category="pizza" categoryImage="/assets/svg/pizza.svg" />
      <Category category="chips" categoryImage="/assets/svg/chips.svg" />
      <Category category="chicken" categoryImage="/assets/svg/chicken.svg" />
      <Category
        category="sharwama"
        categoryImage="/assets/svg/sharwama.svg"
        s
      />
      <Category category="drinks" categoryImage="/assets/svg/drink.svg" />
    </div>
  );
};

export default CategoriesList;
