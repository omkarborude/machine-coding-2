import { useNavigate } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <h3
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          Filpkart
        </h3>
        <div style={{ display: "flex" }}>
          <h2
            onClick={() => {
              navigate("/cart");
            }}
            style={{
              cursor: "pointer",
              border: "1px solid white",
              padding: "0.2rem",
            }}
          >
            Cart
          </h2>
          <h2
            style={{
              cursor: "pointer",
              marginLeft: "2rem",
              border: "1px solid white",
              padding: "0.2rem",
            }}
            onClick={() => {
              navigate("/savedlater");
            }}
          >
            Save Item
          </h2>
        </div>
      </div>
    </nav>
  );
};
