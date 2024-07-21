import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout