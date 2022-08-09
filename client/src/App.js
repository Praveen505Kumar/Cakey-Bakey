import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/core/Home";
import Menu from "./components/core/Menu";
import Signup from "./components/core/Signup";
import Signin from "./components/core/Signin";
import Aboutus from "./components/about/Aboutus";
import Faq from "./components/about/Faq";
import Contactus from "./components/about/Contactus";
import Terms from "./components/about/Terms-conditions";
import Privacy from "./components/about/privacy-policy";
import Disclaimer from "./components/about/disclaimer";
import Adminhome from "./components/admin/Adminhome";
import Users from "./components/admin/Users/Users";
import Category from "./components/admin/Category/Category";
import Products from "./components/admin/Products/Products";
import Orders from "./components/admin/Orders";
import Logout from "./components/core/Logout";
import Cartpage from "./components/core/Cartpage";
import Checkout from "./components/core/Checkout";
import Profile from "./components/core/Profile";
import Userorders from "./components/core/Userorders";
import Ordersuccess from "./components/core/Ordersuccess";
import CheckoutFormUpdate from "./components/core/CheckoutFormUpdate";
import CheckoutForm from "./components/core/CheckoutForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/admin/home" element={<Adminhome />} />
        <Route path="/userdetails" element={<Users />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/orders" element={<Userorders />} />
        <Route path="/updateaddress" element={<CheckoutFormUpdate />} />
        <Route path="/addaddress" element={<CheckoutForm />} />
        <Route path="/user/ordersuccess" element={<Ordersuccess />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
