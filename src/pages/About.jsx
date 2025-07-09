
import { Users, Award, Truck } from "lucide-react"
import GADGET from '../assets/CD-GADGET.jpg'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About ShopEasy</h1>
        <p className="text-xl text-gray-600">Your trusted online shopping destination</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2025, ShopEasy has been committed to providing high-quality products at affordable prices. We
            believe that everyone deserves access to great products that enhance their daily lives.
          </p>
          <p className="text-gray-600">
            Our team carefully curates each product in our catalog to ensure that we only offer items that meet our high
            standards for quality, functionality, and value.
          </p>
        </div>
        <div className="flex justify-center">
         <img src={GADGET} alt="" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer First</h3>
          <p className="text-gray-600">
            We prioritize our customers' satisfaction and strive to provide excellent service.
          </p>
        </div>
        <div className="text-center">
          <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Products</h3>
          <p className="text-gray-600">Every product is carefully selected and tested to meet our quality standards.</p>
        </div>
        <div className="text-center">
          <Truck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Quick and reliable shipping to get your products to you as soon as possible.</p>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Mission</h2>
        <p className="text-gray-600 text-center text-lg">
          To make online shopping simple, enjoyable, and accessible for everyone. We're committed to providing an
          exceptional shopping experience with quality products, competitive prices, and outstanding customer service.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <div className="space-y-2 text-gray-600">
          <p>Email: support@shopeasy.com</p>
          <p>Phone: +880 1704661571</p>
          <p>Address: ShopEasy,  Battar Mor,Sadar , Joypurhat</p>
        </div>
      </div>
    </div>
  )
}
