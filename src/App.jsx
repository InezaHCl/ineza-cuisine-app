import { createBrowserRouter, RouterProvider } from "react-router";
import Welcome from "./ui/Welcome";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import History from "./features/history/History";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Error from "./ui/Error";
import { action as updateOrderAction } from "./features/order/UpdateOrder";

const router = createBrowserRouter([
  {
    index: true,
    element: <Welcome />,
  },
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      {
        path: "/history",
        element: <History />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
