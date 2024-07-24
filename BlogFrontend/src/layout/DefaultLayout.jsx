import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import MobileNav from "../components/mobileNav/MobileNav"
import { useState } from "react"

const DefaultLayout = () => {

  const [sidebarOpen,setSideBarOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <Navbar setSideBarOpen={setSideBarOpen} sideBarOpen={sidebarOpen} />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <div className={`${sidebarOpen ? ' shadow-xl bg-white absolute top-16  max-w-[300px] w-[270px] right-0 min-h-screen transition-all': ' right-[-800px]'}`}>
        <MobileNav />
      </div>
    </div>
  )
}

export default DefaultLayout