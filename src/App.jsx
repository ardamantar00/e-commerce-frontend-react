import { useEffect, useState } from "react";

import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { red } from "@mui/material/colors";
import { calculateBasket, setDrawer } from "./redux/slices/basketSlice";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateBasket());
  }, []);
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          anchor="right"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="flex-row" style={{ padding: "20px" }}>
                    <img
                      style={{ marginRight: "5px" }}
                      src={product.image}
                      width={50}
                      height={50}
                      alt=""
                    />
                    <p style={{ width: "320px", marginRight: "5px" }}>
                      {product.title} ({product.count})
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        marginRight: "15px",
                        width: "70px",
                      }}
                    >
                      {product.price} TL
                    </p>
                    <button
                      style={{
                        padding: "5px",
                        borderRadius: "5px",
                        backgroundColor: "rgb(232, 38, 38)",
                        color: "#fff",
                        width: "60px",
                      }}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              );
            })}
          <h2 style={{ textAlign: "center" }}>
            Toplam tutar : {totalAmount.toFixed(2)} TL
          </h2>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
