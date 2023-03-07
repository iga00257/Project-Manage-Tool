import LeftSideBar from './LeftSideBar'
import PageContent from './PageContent'
function Layout () {
  return (
        <>
        <div className=' h-screen min-w-[100vw] overflow-scroll'>
        <LeftSideBar/>
        <PageContent/>
        </div>

</>
  )
}

export default Layout
