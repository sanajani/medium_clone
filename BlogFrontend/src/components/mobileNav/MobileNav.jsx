import { MdEditSquare } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="max-h-screen overflow-y-scroll p-8">
        <ul className="border-b py-6 border-gray-200 mb-4">
            <li className="my-4"><Link className="flex items-center gap-4 text-lg"><span><MdEditSquare size={20} /></span> <span>Write</span></Link></li>
            <li className="my-2"><Link className="flex items-center gap-4 text-lg"><span><MdEditSquare size={20} /></span> <span>Profile</span></Link></li>
            <li className="my-2"><Link className="flex items-center gap-4 text-lg"><span><MdEditSquare size={20} /></span> <span>Library</span></Link></li>
            <li className="my-2"><Link className="flex items-center gap-4 text-lg"><span><MdEditSquare size={20} /></span> <span>Stories</span></Link></li>
            <li className="my-2"><Link className="flex items-center gap-4 text-lg"><span><MdEditSquare size={20} /></span> <span>Stats</span></Link></li>
        </ul>
        <ul className="py-6 border-b border-gray-200 mb-4 text-[13px]">
            <li className="my-2 capitalize"><Link to='/'>Settings</Link></li>
            <li className="my-2 capitalize"><Link to='/'>Refine recommendations</Link></li>
            <li className="my-2 capitalize"><Link to='/'>manage publications</Link></li>
            <li className="my-2 capitalize"><Link to='/'>help</Link></li>
        </ul>
        <ul className="py-6 border-b border-gray-200 mb-4 text-[13px]">
            <li className="my-2">  <Link>become a medium member</Link> </li>
            <li  className="my-2"> <Link>create a mastodon account</Link> </li>
            <li  className="my-2"> <Link>apply for author verification </Link> </li>
            <li className="my-1"> <Link>apply to the partner program</Link> </li>
            <li className="my-2">  <Link>gift a membership</Link> </li>

        </ul>
        <ul className="py-6 border-b border-gray-200 mb-4 text-[13px]">
            <li className="text-xl mb-3"><Link>sign out</Link></li>
            <li><Link>dev@gmail.com</Link></li>
        </ul>
    </div>
  )
}

export default MobileNav