import "./App.css";
import { Navbar, ProductListing, Cart, SavedLater } from "./Components/export";
import { Routes, Route } from "react-router-dom";
import { useData } from "./Context/DataProvider";
import data from "./Database/ProductData.json";
import { useEffect } from "react";

function App() {
  const { state, dispatch } = useData();
  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: data });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/savedlater" element={<SavedLater />} />
      </Routes>
    </div>
  );
}

export default App;
