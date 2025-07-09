import { Link } from "react-router"

const ProductGrid = ({filteredAndSortedProducts, handleAddToCart}) => {
  return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-48 object-contain hover:scale-105 transition-transform"
              />
            </Link>
            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors mb-1">
                  {product.title}
                </h3>
              </Link>

              {/* Category Badge */}
              <span className="inline-block mb-2 px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                {product.category}
              </span>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

  )
}

export default ProductGrid