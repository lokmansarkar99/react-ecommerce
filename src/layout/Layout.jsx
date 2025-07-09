import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">

    <Navbar />
      
      <main className="flex-1 px-4 py-10">
        <Outlet /> 
      </main>

    
      <Footer />
    </div>
  )
}
