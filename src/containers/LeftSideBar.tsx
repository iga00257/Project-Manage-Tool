import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link, NavLink } from 'react-router-dom'
import routes from '../routes/Sidebar'
import SidebarSubmenu from './SideBbarSubmenu'

function LeftSideBar () {
  const location = useLocation()

  const { isOpen } = useSelector((state: { leftSidebar: { isOpen: boolean } }) => state.leftSidebar)
  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])
  return (
<div className={` fixed justify-self-start h-full w-64 transition-transform -translate-x-full bg-white border-r border-gray-200 ${isOpen ? 'translate-x-0' : ''} dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
   <div className="h-full  pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul className="space-y-2 flex flex-col flex-wrap">
         {routes.map((route, k) => {
           return (
               <li key={k} className="relative flex-shrink-0 flex-col flex-wrap items-stretch">
                  {
                     (route.submenu != null)
                       ? <SidebarSubmenu {...route}/>
                       : (<NavLink end to={route.path} className={({ isActive }) => `flex items-center py-3 px-4  text-base font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 
                       ${isActive ? 'font-semibold bg-primaryBG ' : 'font-normal'}`}>
                        {route.icon}
                        <span className="ml-3">{route.name}</span>
                                            {
                                                location.pathname === route.path
                                                  ? (<span className=" absolute z-50 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primaryText "
                                                aria-hidden="true"></span>)
                                                  : null
                                            }

                     </NavLink>)
                  }

               </li>
           )
         })}
      </ul>
   </div>
</div>
  )
}
export default LeftSideBar
