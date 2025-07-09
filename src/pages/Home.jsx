import { useState, useMemo } from "react"
import { Search, Filter } from "lucide-react"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"
import ProductGrid from "../components/ProductGrid"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import Filters from "../components/Filters"



export default function Home() {

const categories = ["Clothing", "Accessories", "Home & Kitchen", "Electronics"]

  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const { addToCart } = useCart()

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (categoryFilter) {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      )
    }

    if (sortOrder === "low-high") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortOrder === "high-low") {
      filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [searchTerm, sortOrder, categoryFilter])

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className="space-y-6">
     
      <Hero />
      
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
       
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

       
    <Filters categories={categories} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} sortOrder={sortOrder} setSortOrder={setSortOrder} /> 
      </div>

    <div className="w-full flex justify-center pb-2 ">
        <h1 className="  text-3xl md:text-4xl  border-b-2  border-amber-300 inline-block ">All Products</h1>
    </div>
   
            <ProductGrid filteredAndSortedProducts={filteredAndSortedProducts} handleAddToCart={handleAddToCart} />

    
      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your filters.</p>
        </div>

        
      )}

  
    </div>
  )
}
