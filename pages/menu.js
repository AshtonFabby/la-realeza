import ItemsGrid from "../components/ItemsGrid";
import MenuHero from "../components/MenuHero";
import RestaurantList from "../components/RestaurantList";
import Weekly from "../components/Weekly";

const Menu = () => {
  return (
    <div>
      <MenuHero />
      <div className="container my-12 mx-auto">
        <h2 className="font-hotpizza text-2xl">Welcome to Realeza</h2>
      </div>
      <RestaurantList />
      <ItemsGrid />
      <Weekly />
    </div>
  );
};

export default Menu;
