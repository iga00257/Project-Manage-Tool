import { Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable } from './StrictModeDroppable'
import Card from './Card'

interface Issue {
  id: string
  name: string
  type?: string
}
interface Status {
  id: number
  name: string
}

interface CardData {
  status: Status
  issues: Issue[]
}

interface Props {
  cardData: CardData
  columnIndex: number
}

const CardBoardColumn = (props: Props) => {
  const {
    cardData: { status, issues },
    columnIndex
  } = props

  const cards = issues.map((issue, index: number) => {
    return (
      // render each Draggable card using map
      <Draggable draggableId={issue.id} key={issue.id} index={index}>
        {/* // draggableId: id of card  */}
        {(provided: any, snapshot: any) => (
          // expand the necessary props of react-beautiful-dnd
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {/* card component */}
            <Card issue={issue} />
          </div>
        )}
      </Draggable>
    )
  })
  const ColumnHeader = () => {
    return (
      <div className="flex h-10 justify-between px-2 pb-3">
        <div>
          <p className="mt-1 mr-0 mb-5 text-sm font-bold  ">{status.name}</p>
        </div>

      </div>
    )
  }
  return (
    <div className="mr-3 flex h-full flex-col px-4 py-3 focus:outline-none">
      <ColumnHeader />

      <StrictModeDroppable droppableId={`${columnIndex}`} key={`${columnIndex}`}>
        {/* // droppableId: the Id of card column */}

        {(provided: any, snapshot: any) => (
          <div className="h-full" {...provided.droppableProps} ref={provided.innerRef}>
            <div>{cards}</div>
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </div>
  )
}

export default CardBoardColumn
