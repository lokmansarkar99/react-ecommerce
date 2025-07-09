"use client"
import { useParams, Link } from "react-router"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const product = products.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Back to Home
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <p className="text-gray-600 text-lg">{product.description}</p>
          </div>

          <div className="border-t border-b py-4">
            <span className="text-4xl font-bold text-blue-600">${product.price}</span>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Product Details</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Category: {product.category}</li>
              <li>Free shipping on orders over $50</li>
              <li>30-day return policy</li>
              <li>1-year warranty included</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
