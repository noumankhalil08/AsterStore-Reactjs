import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import WishList from './Pages/WishList'
import Products from './Pages/Products'
import Sale from './Pages/Sale'
import ProductPage from './Components/ProductPage'
import Checkoutform from './Components/Checkoutform'
import TermsofServices from './Pages/TermsofServices'
import RefundPolicy from './Pages/RefundPolicy'


function App() {

  return (
    <>
    <div className='custom-cursor' >
    {/* style={{ cursor: 'url(/circle.png) 16 16,auto' }} */}
     <BrowserRouter>
     <ToastContainer/>
     <Header  />
     <Navbar/>
     <Routes>
     <Route path="/" element={<HomePage  />}/> 
     <Route path="/login" element={<Login/>}/> 
     <Route path="/cart" element={<Cart/>}/> 
     <Route path="/wishlist" element={<WishList/>}/> 
     <Route path="/products" element={<Products/>}/> 
     <Route path="/sale" element={<Sale/>}/> 
     <Route path="/productpage" element={<ProductPage/>}/> 
     <Route path="/checkoutform" element={<Checkoutform/>}/> 
     <Route path="/termofservices" element={<TermsofServices/>}/> 
     <Route path="/refundpolicy" element={<RefundPolicy/>}/> 
     </Routes>
     </BrowserRouter>
     <Footer/>
     
    </div>
    </>
  )
}

export default App


