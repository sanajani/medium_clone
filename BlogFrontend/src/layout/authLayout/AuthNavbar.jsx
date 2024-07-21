import { Link } from "react-router-dom"

const AuthNavbar = () => {
  return (
    <nav className="w-full bg-[#e6e6e6] h-[70px] flex justify-between items-center px-6 md:px-8 lg:px-20 ">
        <h1 className="text-4xl font-mono font-semibold">Medium</h1>
        <div className="flex items-center gap-5">
          <ul className="md:flex hidden gap-5 text-sm">
            <li><Link to='/'>Our story</Link></li>
            <li><Link to='/'>Membership</Link></li>
            <li><Link to='/'>Write</Link></li>
            <li><Link to='/'>Sign in</Link></li>
          </ul>
          
          <button className="text-white text-sm bg-black py-2 px-4 rounded-full">Get started</button>
        </div>
    </nav>
  )
}

export default AuthNavbar