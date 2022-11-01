import MenuItem from "./MenuItem";

import { imageToUrl } from "../lib/helpers";

const ItemsGrid = (props) => {
  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center xl:justify-self-start ">
        {props.dishes.data.map((dish) => (
          <MenuItem
            key={dish.id}
            dishId={dish.id}
            mealImage={imageToUrl(dish.attributes.image)}
            iconImage={imageToUrl(
              dish.attributes.restaurant.data.attributes.logo
            )}
            title={dish.attributes.title}
            price={dish.attributes.price}
            slug={dish.attributes.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsGrid;
