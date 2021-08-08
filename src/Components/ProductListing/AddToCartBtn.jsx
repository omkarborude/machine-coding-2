import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/DataProvider";

const ifAlreadyAddedToCart = (data, product) => {
  return !!data.find((item) => item._id === product);
};

export function AddToCartBtn({ product }) {
  const {
    state: { cart },
    dispatch,
  } = useData();
  const navigate = useNavigate();

  const AlreadyInCart = ifAlreadyAddedToCart(cart, product._id);
  const addToCart = () => {
    if (AlreadyInCart) {
      navigate("/cart");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: { item: product } });
    }
  };

  return (
    <div>
      <button onClick={addToCart}>
        {AlreadyInCart ? "Go to Cart" : "Add To Cart"}
      </button>
    </div>
  );
}
