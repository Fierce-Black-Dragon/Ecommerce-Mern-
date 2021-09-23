import React from "react";
import "./App.css";

// import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignupOrSigninScreen from "./screens/signupScreen/SignupOrSigninScreen";
import Home from "./screens/HomeScreen/Homescreen";
import SellerDashBoard from "./screens/Seller DashBoard/SellerDashBoard";

import { Cart } from "./components/Cart/Cart";
import Checkout from "./components/Shipping&Checkout/Checkout";
import MyOrder from "./components/MyOrders/MyOrder";
import { MyProfile } from "./components/Myprofile/MyProfile";
import MyOrderBill from "./components/MyOrders/MyOrderBill";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>
          <Route path="/admin" exact>
            <SellerDashBoard />
          </Route>
          <Route path="/admin/myproduct" exact>
            <SellerDashBoard sellerProducts />
          </Route>
          <Route path="/admin/editProduct/:id" exact>
            <SellerDashBoard Update />
          </Route>
          <Route path="/Product/:id" exact>
            <Navbar />
            <Home byId />
          </Route>
          <Route path="/mycart" exact>
            <Navbar />
            <Cart />
          </Route>
          <Route path="/placeOrder" exact>
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/myOrder" exact>
            <Navbar />
            <MyOrder />
          </Route>
          <Route path="/myBills" exact>
            <Navbar />
            <MyOrderBill />
          </Route>
          <Route path="/myProfile" exact>
            <Navbar />
            <MyProfile />
          </Route>
          <Route path="/admin/sellerOrderById/:id" exact>
            <SellerDashBoard orderByid />
          </Route>
          <Route path="/admin/orders" exact>
            <SellerDashBoard SellerOrder />
          </Route>
          <Route path="/auth" exact>
            <Navbar />
            <SignupOrSigninScreen />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
