import { Route, Routes } from "react-router";
import Welcome from "./ui/Welcome";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import History from "./features/history/History";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";

function App() {
  return (
    <Routes>
      <Route index element={<Welcome />} />

      <Route path="app" element={<AppLayout />}>
        {/* Childern */}
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order/new" element={<CreateOrder />} />
        <Route path="order/:orderId" element={<Order />} />
        <Route path="history" element={<History />} />
        {/* <Route path="app">s</Route> */}
      </Route>
    </Routes>
  );
}

export default App;
