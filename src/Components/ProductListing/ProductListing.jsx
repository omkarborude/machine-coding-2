import { useData } from "../../Context/DataProvider";
import { AddToCartBtn } from "./AddToCartBtn";
import "./listing.css";

export const ProductListing = () => {
  const { state, dispatch } = useData();

  return (
    <div className="home-main-div">
      <div className="pr-listing-main-div">
        {state.products.map((item) => {
          return (
            <div class="card" style={{ width: "15rem" }}>
              <div className="card-img-div">
                <img src={item.image} class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.description}</p>
                <h6>Rs.{item.price}</h6>
                <h7>Brand:{item.brand}</h7>
                <p>Size:{item.size}</p>

                {/* <a href="#" class="btn btn-primary">
                  Add To Cart
                </a> */}
              </div>
              <AddToCartBtn product={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
