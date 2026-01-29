import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import ProductListing from './pages/ProductListing.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { CartProvider } from './useContext/Cart.jsx';
import Cart from './pages/Cart.jsx';


createRoot(document.getElementById('root')).render(
  <CartProvider>
    <Router>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path="/productPage" element={<ProductListing/>} />
          <Route path="/productPage/:productId" element={<ProductDetail/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
    </Router>
  </CartProvider>,
)
