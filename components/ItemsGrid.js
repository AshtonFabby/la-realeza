import { useEffect, useState } from "react";
import client from '../utils/client'
import { imageUrl } from "../utils/image";
import MenuItem from "./MenuItem";
const ItemsGrid = () => {

  const [state, setState] = useState({
    dishes: [],
    error: '',
    loading: true
  });
  const { loading, error, dishes } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dishes = await client.fetch(`*[_type=="dish"]{
          image,
          title,
          slug,
          price,
          restaurant->{logo}
        }`);
        setState({ dishes, loading: false });

      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto my-12">

      {loading ? (<p>is loading</p>) :
        error ? (<p>{error}</p>) :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center xl:justify-self-start ">
            {
              dishes.map((dish) => (

                <MenuItem
                  key={dish.slug}
                  mealImage={imageUrl(dish.image)}
                  iconImage={imageUrl(dish.restaurant.logo)}
                  title={dish.title}
                  price={dish.price}
                  slug={dish.slug.current}
                />

              )
              )
            }
          </div>
      }
    </div>
  );
};

export default ItemsGrid;
