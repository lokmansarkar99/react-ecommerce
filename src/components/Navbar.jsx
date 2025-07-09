import { Link } from "react-router"
import { ShoppingCart, Store, Menu, X } from "lucide-react"
import { useCart } from "../context/CartContext"
import { useState } from "react"

export default function Navbar() {
  const { getTotalItems } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
          <Store className="h-8 w-8 text-blue-600" />
          <span>ShopEasy</span>
        </Link>


{/* Cart */}
                    <Link
              to="/cart"
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative block py-2 text-gray-600 hover:text-blue-600 md:inline-block md:flex md:items-center md:order-3"
            >
              <ShoppingCart className="h-5 w-5 inline-block md:mr-1 " />
              <span className="hidden sm:inline">Cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/*  Nav Menu Links */}
        <ul
          className={` absolute top-20 left-0 w-full bg-white text-center md:flex md:order-2 md:static md:w-auto md:bg-transparent md:space-x-8 md:text-left transition-all duration-300 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-gray-600 hover:text-blue-600 md:inline-block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-gray-600 hover:text-blue-600 md:inline-block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-gray-600 hover:text-blue-600 md:inline-block"
            >
              Contact
            </Link>
          </li>
        </ul>


      </div>
    </nav>
  )
}
