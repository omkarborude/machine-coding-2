import { useData } from "../../Context/DataProvider";
import "./cart.css";

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useData();
  console.log(cart);

  const cartvalue = (cart) => {
    return cart.reduce((acc, curr) => {
      return acc + Number(curr.price) * curr.quantity;
    }, 0);
  };

  //   Discount value
  const discountValue = (price, discout) => {
    return price - (price * discout) / 100;
  };

  const totalitem = (cart) => {
    return cart.reduce((acc, curr) => {
      return acc + Number(curr.quantity);
    }, 0);
  };
  return (
    <div className="cart-main-div">
      <h2>
        {cart.length < 1 ? (
          "Cart is Empty"
        ) : (
          <h3>
            {"Cart"}({cart.length} Item)
          </h3>
        )}
      </h2>
      <div className="cart-inner-flex-main-div">
        <div className="cart-left-products-div">
          {cart.map((item) => {
            return (
              <div className="cart-product-div">
                <div className="cart-img-div">
                  <img src={item.image} />
                </div>
                <div className="cart-product-info">
                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <div className="cart-product-bns">
                    <button
                      className="dec-btn"
                      onClick={() => {
                        item.quantity == 1
                          ? dispatch({ type: "ROMOVE_PRODUCT", payload: item })
                          : dispatch({ type: "DEC_QUANTITY", payload: item });
                      }}
                    >
                      <i
                        className={
                          item.quantity !== 1 ? "bx bx-minus" : "bx bx-trash"
                        }
                      ></i>
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => {
                        dispatch({ type: "INC_QUANTITY", payload: item });
                      }}
                      className="inc-btn"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn-remove-product"
                    onClick={() => {
                      dispatch({ type: "ROMOVE_PRODUCT", payload: item });
                    }}
                  >
                    Remove
                  </button>
                  <div>
                    {" "}
                    <button
                      className="btn-remove-product"
                      onClick={() => {
                        dispatch({ type: "SAVED_FOR_LATER", payload: item });
                      }}
                    >
                      Save for Later
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-right-value-div">
          <h5>Cart Items : {totalitem(cart)}</h5>
          <h5>Cart Value: {cartvalue(cart)}</h5>
          <p style={{ color: "orange" }}>Discount : 10%</p>
          <p>------------------------------------------</p>
          <h5>Final Value: {discountValue(cartvalue(cart), 10)}</h5>
        </div>
      </div>
    </div>
  );
};
