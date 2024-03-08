

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingleProduct from './pages/SingleProduct';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contactUs' element={<ContactUs />} />
      </Routes>
    </Router>

  );
}

export default App;
