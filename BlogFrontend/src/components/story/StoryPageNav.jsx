import { IoIosNotificationsOutline } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";


const StoryPageNav = () => {
  return (
    <nav className="flex items-center justify-between py-3">
        {/* logo */}
        <div className="flex items-center gap-5">
        <h1 className="font-bold tracking-wide text-3xl ">Medium</h1>
        <div className="mt-2 font-light hidden lg:block">Draft in <span className="text-sm font-medium">Sanaulluh Mobini</span> </div>
        </div>
        <ul className="gap-5 items-center pt-2 hidden md:flex">
            <li className="cursor-pointer bg-green-600 text-white px-2  rounded-3xl">publish</li>
            <li className="cursor-pointer"><BsThreeDots size={24} /></li>
            <li className="cursor-pointer"><IoIosNotificationsOutline size={24} /></li>
            <li  className="w-8 rounded-full cursor-pointer bg-pink-400 h-8 border"></li>
        </ul>
    </nav>
  )
}

export default StoryPageNav