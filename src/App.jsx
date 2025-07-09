import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import About from "./pages/About"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"
import Layout from "./layout/Layout"

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all shared layout content like Navbar, Footer, etc. */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
