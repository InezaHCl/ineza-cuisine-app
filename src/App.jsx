import { Route, Routes } from "react-router";
import Welcome from "./ui/Welcome";
import AppLayout from "./ui/AppLayout";
import Home from "./utils/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import History from "./features/history/History";
import Order from "./features/order/Order";

function App() {
  return (
    <Routes>
      <Route index element={<Welcome />} />

      <Route element={<AppLayout />}>
        {/* Childern */}
        <Route path="app">
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="order/new" element={<Order />} />
          <Route path="cart" element={<Cart />} />
          <Route path="history" element={<History />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
