/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom"
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import MobileNav from "./mobileNav/MobileNav";

const Navbar = ({setSideBarOpen,sideBarOpen}) => {
  return (
    <nav className="w-full bg-gray-50 shadow-md h-[70px] flex justify-between items-center px-6 md:px-8 lg:px-20 ">
      <div className="flex gap-5 items-center">
        <h1 className="text-4xl font-mono font-semibold"><Link to='/'>Medium</Link></h1>
        <div className=" relative gap-4 md:flex items-center hidden">
          <input type="text" placeholder="search" className="pl-8 rounded-full bg-white px-3 py-1 text-lg outline-none w-full"/>
          <CiSearch className=" absolute left-1" size={20} />
        </div>
      </div>
        <div className="flex items-center gap-5">
          <ul className="flex gap-5 text-sm items-center">
            <li className="hidden md:block"><Link to='/new-story' className="flex gap-2 items-center"> <MdEditSquare size={24} /> Write</Link></li>
            <li className="block md:hidden"><Link to='/search'><CiSearch size={26} /></Link></li>
            <li><Link to='/notifications'><IoIosNotificationsOutline size={28} /></Link></li>
            <li onClick={() => setSideBarOpen(!sideBarOpen)} className="w-8 rounded-full cursor-pointer bg-pink-400 h-8 border"></li>
          </ul>
        </div>
        <div
className={`${sideBarOpen ? ' shadow-xl bg-white absolute top-16 z-20 overflow-clip max-w-[300px] w-[270px] right-0 min-h-screen transition-all': ' right-[-800px] hidden transition-all'}`}>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar