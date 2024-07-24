import { CiSearch } from "react-icons/ci";

const MobileSearch = () => {
    const recentSeearches = false
  return (
    <div className="w-full mt-10">
        <div className="w-[90%] mx-auto">
            <div className="flex items-center relative  w-full py-2 border rounded-2xl mb-7">
                <div className="px-3">
                    <CiSearch size={18}/>
                </div>
                <input className="outline-none flex-1 px-3 text-base" type="text" placeholder="Search"/>
            </div>
            <h1 className="text-2xl font-bold">Recent Searches</h1>

            <div className="mt-12">
                {
                    recentSeearches ? <h1>Hello your recent searhes</h1> : <p>You do not have recent searches</p>
                }
            </div>
        </div>
    </div>
  )
}

export default MobileSearch