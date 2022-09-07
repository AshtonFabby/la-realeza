import MenuItem from "./MenuItem";
const ItemsGrid = () => {
  return (
    <div className="container mx-auto my-12">
      <h2 className=" font-hotpizza text-2xl mb-5">All</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center xl:justify-self-start ">
        <MenuItem
          mealImage="/assets/images/meal.png"
          iconImage="/assets/images/icon.png"
          title="Burger"
          description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."
        />
        <MenuItem
          mealImage="/assets/images/meal2.png"
          iconImage="/assets/images/kfc.png"
          title="Chips"
          description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."
        />
        <MenuItem
          mealImage="/assets/images/pizza.png"
          iconImage="/assets/images/mambos.png"
          title="Pizza"
          description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."
        />
        <MenuItem
          mealImage="/assets/images/meal.png"
          iconImage="/assets/images/chickeninn.png"
          title="Burger"
          description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."
        />
        <MenuItem
          mealImage="/assets/images/chicken.png"
          iconImage="/assets/images/kfc.png"
          title="Chicken"
          description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."
        />
        <MenuItem
          mealImage="/assets/images/meal2.png"
          iconImage="/assets/images/kfc.png"
          title="Chips"
          description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."
        />
        <MenuItem
          mealImage="/assets/images/meal.png"
          iconImage="/assets/images/chickeninn.png"
          title="Burger"
          description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."
        />
        <MenuItem
          mealImage="/assets/images/meal.png"
          iconImage="/assets/images/chickeninn.png"
          title="Burger"
          description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."
        />
        <MenuItem
          mealImage="/assets/images/meal.png"
          iconImage="/assets/images/chickeninn.png"
          title="Burger"
          description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."
        />
        <MenuItem
          mealImage="/assets/images/meal.png"
          iconImage="/assets/images/chickeninn.png"
          title="Burger"
          description="Nunc in fusce pretium, netus libero pulvinar nunc varius vel. Enim."
        />
      </div>
    </div>
  );
};

export default ItemsGrid;
