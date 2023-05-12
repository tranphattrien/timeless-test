import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

import AdminSidebar from "./components/admin/sidebar/AdminSidebar";
import AdminTopbar from "./components/admin/topbar/AdminTopbar";
import AdminUserList from "./pages/admin/userList/AdminUserList";
import AdminUser from "./pages/admin/user/AdminUser";
import AdminNewUser from "./pages/admin/newUser/AdminNewUser";
import AdminProductList from "./pages/admin/productList/AdminProductList";
import AdminProduct from "./pages/admin/product/AdminProduct";
import AdminNewProduct from "./pages/admin/newProduct/AdminNewProduct";
import AdminLogin from "./pages/admin/login/AdminLogin";
import ErrorPage from "./pages/ErrorPage";

import AdminHome from "./pages/admin/home/AdminHome";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        {admin ? (
          <>
            <AdminTopbar />
            <div className="container">
              <AdminSidebar />
              <Route exact path="/admin">
                <AdminHome />
              </Route>
              <Route path="/admin/users">
                <AdminUserList />
              </Route>
              <Route path="/admin/user/:userId">
                <AdminUser />
              </Route>
              <Route path="/admin/newUser">
                <AdminNewUser />
              </Route>
              <Route path="/admin/products">
                <AdminProductList />
              </Route>
              <Route path="/admin/product/:productId">
                <AdminProduct />
              </Route>
              <Route path="/admin/newproduct">
                <AdminNewProduct />
              </Route>
            </div>
          </>
        ) : (
          <ErrorPage />
        )}
      </Switch>
    </Router>
  );
};

export default App;
