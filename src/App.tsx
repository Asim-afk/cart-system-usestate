import { useState } from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { CartData } from "./types";
import Header from "./components/Header";

function App() {
  const [cartData, setCartData] = useState<CartData>({
    items: [],
    totalPrice: 0,
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header cartCount={cartData.items.length} />
          <br />
          <main>
            <Outlet />
          </main>
        </>
      ),
      children: [
        {
          index: true,
          element: <Home cartData={cartData} setCartData={setCartData} />,
        },
        {
          path: "/cart",
          element: <Cart cartData={cartData} setCartData={setCartData} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
