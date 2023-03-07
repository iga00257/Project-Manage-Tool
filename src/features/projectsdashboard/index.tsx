import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import CardBoardColumn from './CardColumn'
import ProjectDashBoardTopBar from './PjTopBar'
import { headerSlice, projectsSlice } from '../../app/store'
import DashboardTopBar from '../dashboard/components/DashboardTopBar'
import { current } from '@reduxjs/toolkit'
interface Issue {
  id?: string
  name?: string
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
const data: CardData[] = [
  {
    status: {
      id: 0,
      name: 'Todo'
    },
    issues: [
      {
        id: 'Todo1',
        name: '工廠瑕疵檢測 ',
        type: 'Classification'
      },
      {
        id: 'Todo2',
        name: '人流檢測',
        type: 'Object Detection'
      },
      {
        id: 'Todo3',
        name: '姿態辨識',
        type: 'Pose Estimation'
      }
    ]
  },
  {
    status: {
      id: 1,
      name: '進行中'
    },
    issues: [
      {
        id: 'Inprogress1',
        name: '車流計算',
        type: 'Object Detection'
      }
    ]
  },
  {
    status: {
      id: 2,
      name: '測試驗證中'
    },
    issues: [
      {
        id: 'Inreview0',
        name: '車牌辨識系統2',
        type: 'Pose Estimation'
      }
    ]
  },

]

function ProjectsDashboard () {
  const dispatch = useDispatch()// 創建一個 dispatch 函數
  const projects = useSelector(state => state.projects.data)
  useEffect(() => {
    dispatch(projectsSlice.actions.dataMutation(data))
  }, [])


  const onDragEnd = (e: any) => {
    const { source, destination } = e
    dispatch(projectsSlice.actions.onDragEnd({ source, destination }))
  }

  const columns = projects.map((cardData: CardData, columnIndex: number) => {
    const propsToColumn = { cardData, columnIndex }
    return <CardBoardColumn key={`columnIndex${columnIndex}`} {...propsToColumn} />
  })
  return (
    <div className="flex w-full p-4 h-full flex-col items-center">
        {/** ---------------------- Select Period Content ------------------------- */}
        {/* <ProjectDashBoardTopBar/> */}

        {/** ---------------------- Drag-Drop Placeholder ------------------------- */}

        <DragDropContext
          onDragEnd={(e: any) => {
            onDragEnd(e)
          }}
          onDragStart={(e: any) => {
            console.log(e)
          }}
        >
          <div className="flex h-full mt-2">{columns}</div>
        </DragDropContext>
      </div>
  )
}

export default ProjectsDashboard
