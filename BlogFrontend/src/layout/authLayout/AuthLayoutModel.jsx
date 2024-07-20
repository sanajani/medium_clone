import { Outlet } from "react-router-dom"
import AuthNavbar from "./AuthNavbar"
import Footer from "../../components/Footer"


const AuthLayoutModel = () => {
  return (
    <div>
      <AuthNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AuthLayoutModel