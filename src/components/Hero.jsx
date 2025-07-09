import HERO_IMAGE from '../assets/CD-GADGET.jpg'
import { Link } from "react-router"

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[250px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${HERO_IMAGE})`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
            Welcome to <span className="text-blue-600">ShopEasy</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-50 max-w-xl">
            Discover amazing products at great prices. Shop smarter, live better.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}
