import React, { useState } from "react";
import "../css/Header.css";
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector, useDispatch } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  const dispatch = useDispatch();
  const { products, count } = useSelector((store) => store.basket);
  const navigete = useNavigate();
  const [theme, setTheme] = useState(false);
  const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
    setTheme(!theme);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row">
        <img
          className="logo"
          src="./src/images/logo.png"
          alt=""
          onClick={() => navigete("/")}
        />
        <p className="logo-text">AYM A.Ş</p>
      </div>
      <div className="flex-row">
        <input
          className="search-input"
          type="text"
          name=""
          id=""
          placeholder="Bir şeyler ara"
        />
        <div>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}
          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="error"
          >
            <FaBasketShopping className="icon" style={{ marginRight: "6px" }} />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
