import { Outlet } from "react-router-dom"
import AuthNavbar from "./AuthNavbar"
import Footer from "../../components/Footer"


const AuthLayoutModel = () => {
  return (
    <div>
      <AuthNavbar />
        <div className="min-h-[90vh]">
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default AuthLayoutModel