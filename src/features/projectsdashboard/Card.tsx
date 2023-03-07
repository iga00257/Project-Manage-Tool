
import IconCircleDouble from '~icons/mdi/circle-double'
import IconAccountCircleOutline from '~icons/mdi/account-circle-outline'
import { Link } from 'react-router-dom'
interface Props {
  issue: { id: string, name: string, type?: string }
}

function Card (props: Props) {
  const { issue } = props
  let textColor
  switch (issue.type) {
    case 'Classification':
      textColor = ' text-yellow-600'
      break
    case 'Pose Estimation':
      textColor = ' text-green-800'
      break
    case 'Object Detection':
      textColor = ' text-primary'
      break
    default:
      textColor = ' text-primary'
  }
  return (
    <>
    <Link to={'/app/project/overview'}>
    <div className={' cursor-pointer rounded-sm px-2 py-3 shadow-md bg-white lg:w-40 '}>
        <div className="flex h-full w-full flex-col">
          <div className="flex justify-between text-xs ">
            <div className="flex">SW-</div>
            <IconAccountCircleOutline />
          </div>
          <span className={'py-1 text-sm   '} >{issue.name}</span>
          <div className="mt-1 flex  text-xs  ">
            <IconCircleDouble />
            <span className={`${textColor}`}>{issue.type}</span>
          </div>
        </div>
      </div>
      <div className="h-2"></div>
    </Link>

    </>
  )
}

export default Card
