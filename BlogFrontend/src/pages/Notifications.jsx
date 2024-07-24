import { Outlet, useLocation, NavLink } from "react-router-dom"

const ShowNotifications = () => {
    const location = useLocation();
    const currentLocation = location.pathname === "/notifications";
    return (
      <div className="px-12">
          <h1 className="font-bold text-xl md:text-2xl my-10">Notifications</h1>
          <ul className="mt-10 border-b flex gap-8 border-gray-200">
              <li><NavLink className="hover:bg-gray-50 transition-all py-1 px-8 inline-block" to='all'>All</NavLink></li>
              <li><NavLink className="hover:bg-gray-50 transition-all py-1 px-4 inline-block" to="response">Responses</NavLink></li>
          </ul>
          <div className="py-5 px-3">
            {!currentLocation ? <Outlet/> : 'You are all caught up.'}
          </div>
      </div>
    )
  }

  export default ShowNotifications