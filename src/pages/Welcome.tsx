import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { headerSlice } from '../app/store'
import { Link } from 'react-router-dom'

function InternalPage () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(headerSlice.actions.setPageTitle({ title: '' }))
  }, [])

  return (
      <div className="hero h-4/5 bg-base-200">
      <div className="hero-content">
        <div className="max-w-md">
            <Link to="/app/dashboard"><button className="btn bg-base-100 btn-outline">Get Started</button></Link>
        </div>
      </div>
    </div>
  )
}

export default InternalPage
