import {RouterProvider} from 'react-router-dom'
import { routes } from './routes/routes.jsx'
const App = () => {
  return (
    <div className="bg-red-500">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App