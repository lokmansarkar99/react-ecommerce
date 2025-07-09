
import { Link } from "react-router"
import { Home, AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="text-center py-12">
      <AlertCircle className="h-24 w-24 text-gray-400 mx-auto mb-6" />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Home className="h-5 w-5 mr-2" />
        Back to Home
      </Link>
    </div>
  )
}
