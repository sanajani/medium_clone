import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import { useState } from "react"

const DefaultLayout = () => {

  const [sidebarOpen,setSideBarOpen] = useState(false);
  const checkSideBar = () => {
    if(sidebarOpen) {
      return setSideBarOpen(false)
    }
  }
  return (
    <div className="relative overflow-hidden" onClick={checkSideBar}>
      <Navbar setSideBarOpen={setSideBarOpen} sideBarOpen={sidebarOpen} />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout