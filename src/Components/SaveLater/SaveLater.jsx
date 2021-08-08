import { useData } from "../../Context/DataProvider";
import "./savelater.css";

export const SavedLater = () => {
  const {
    state: { saveLater },
    dispatch,
  } = useData();

  return (
    <div className="saved-later-main-div">
      <h3>Save For Later Item ({saveLater.length})</h3>

      {saveLater.map((item) => {
        return (
          <div className="saved-later-product-card">
            <div className="savelater-img-div">
              <img src={item.image} />
            </div>
            <div>
              <p>{item.name}</p>
              <p>Rs.{item.price}</p>
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_SAVE_LATER", payload: item });
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
