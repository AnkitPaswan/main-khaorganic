import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product/Product";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUp";
import Cart from "./pages/Cart/Cart";
import ContactUs from "./pages/ContactPage/ContactUs";
import ProductList from "./pages/ProductList/ProductList";
// const user = useSelector((state) => state.user.currentUser);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
