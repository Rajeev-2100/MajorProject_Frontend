import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ProductListing from './pages/ProductListing.jsx'
import ProductDetail from './pages/productDetail.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/productPage',
    element: <ProductListing/>
  },
  {
    path: '/productPage/:productId',
    element: <ProductDetail/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
