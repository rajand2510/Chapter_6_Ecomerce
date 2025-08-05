import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Page/Home';
import NotFound from './Page/NotFound';
import Profile from './Page/Profile';
import Checkout from './Page/Checkout';
import Product from './Page/Product';
import { LogIn } from 'lucide-react';
import { LoginPage } from './Page/Login';
import { SignupPage } from './Page/SignupPage';


function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Cart" element={<Checkout />} />
        <Route path="/Product" element={<Product />} />
          <Route path="/login" element={<LoginPage />} />
             <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
