import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">We'd love to hear from you!</p>
      </div>

    
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <Mail className="h-10 w-10 text-blue-600 mx-auto mb-2" />
          <p className="text-gray-800 font-semibold">Email</p>
          <p className="text-gray-600">support@shopeasy.com</p>
        </div>
        <div>
          <Phone className="h-10 w-10 text-blue-600 mx-auto mb-2" />
          <p className="text-gray-800 font-semibold">Phone</p>
          <p className="text-gray-600">+880 1704661571</p>
        </div>
        <div>
          <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-2" />
          <p className="text-gray-800 font-semibold">Address</p>
          <p className="text-gray-600">ShopEasy, Battar Mor, Sadar, Joypurhat</p>
        </div>
      </div>

    
      <div className="bg-blue-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
