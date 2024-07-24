import { Outlet,Link } from "react-router-dom"


const ShowNotifications = () => {
    return (
      <div className="px-12">
          <h1 className="font-bold text-xl md:text-2xl my-10">Notifications</h1>
          <ul className="mt-10 border-b flex gap-8 border-gray-200">
              <li className="hover:bg-gray-50 transition-all py-1 px-4"><Link to='all'>All</Link></li>
              <li className="hover:bg-gray-50 transition-all py-1 px-4"><Link to="response">Responses</Link></li>
          </ul>
          <>
            {<Outlet /> ? <Outlet/> : 'You are all caught up.'}
          </>
      </div>
    )
  }
  
  export default ShowNotifications