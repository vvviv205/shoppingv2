import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import React, { createContext, useContext, useState } from "react";
import { loader as productsLoader } from "./features/Menu/Menu";
import Menu from "./features/Menu/Menu";
import Productpage, {
  loader as productLoader,
} from "./features/Menu/Productpage";
import { Toaster } from "react-hot-toast";
import { useLocalStorage } from "./services/useLocalStorage";
import { useCart } from "./services/useCart";
import Cart from "./features/Cart/Cart";
import { useOrder } from "./services/useOrder";
import Order from "./features/Order/Order";
import Homepage from "./features/Homepage/Homepage";
import { useTheme } from "./services/theme";
import Adminlayout from "./features/Admin/AdminLayout/Adminlayout";
import Dashboard from "./features/Admin/DashBoard/Dashboard";
import Productsad, {
  loader as productsadLoader,
} from "./features/Admin/products/Productsad";
import PendingOrders from "./features/Admin/pending orders/PendingOrders";
import Users from "./features/Admin/Users/Users";
import Settings from "./features/Admin/settings/Settings";
import Profile from "./features/Admin/profile/Profile";
import Welcomeadmin from "./features/Admin/AdminLayout/Welcomeadmin";
import("preline");
/* if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
} else {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
} */
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/products/:category",
        element: <Menu />,
        loader: productsLoader,
      },
      {
        path: "/product/:id",
        element: <Productpage />,
        loader: productLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Adminlayout />,
    children: [
      {
        path: "",
        element: <Welcomeadmin />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Productsad />,
        loader: productsadLoader,
      },
      {
        path: "pending-orders",
        element: <PendingOrders />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

const Post = createContext();

export function usePost() {
  const context = useContext(Post);
  return context;
}
function App() {
  const [isSharing, setIsSharing] = useState(false);
  const [infoSharing, setInfoSharing] = useState({ url: "", id: 0 });
  const { BookMarked, setBookMarked } = useLocalStorage();
  const { theme, settheme } = useTheme();
  const [isBuying, setIsBuying] = useState(false);
  const [buyInfor, setBuyInfor] = useState([]);
  const { cart, setCart, total, settotal } = useCart();
  const { order, setOrder } = useOrder();
  return (
    <Post.Provider
      value={{
        isSharing,
        setIsSharing,
        infoSharing,
        setInfoSharing,
        BookMarked,
        setBookMarked,
        cart,
        setCart,
        total,
        isBuying,
        setIsBuying,
        buyInfor,
        setBuyInfor,
        order,
        setOrder,
        settheme,
      }}
    >
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </Post.Provider>
  );
}

export default App;
