import ProjectsDashboard from '../features/projectsdashboard'
import { headerSlice } from '../app/store'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
function InternalPage () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(headerSlice.actions.setPageTitle({ title: 'Projects Dashboard' }))
  }, [])

  return (
    <ProjectsDashboard />
  )
}

export default InternalPage
