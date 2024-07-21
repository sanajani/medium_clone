import AuthLayoutModel from "./authLayout/AuthLayoutModel"
import DefaultLayout from "./DefaultLayout"
import { useState } from "react"

const Layout = () => {
    const [login] = useState(true)

  return (
    login ? <DefaultLayout/>: <AuthLayoutModel/>
  )
}

export default Layout