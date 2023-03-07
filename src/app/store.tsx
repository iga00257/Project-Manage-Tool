import { configureStore, createSlice } from '@reduxjs/toolkit'
export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    pageTitle: 'Home', // current page title state management
    noOfNotifications: 15, // no of unread notifications
    newNotificationMessage: '', // message of notification to be shown
    newNotificationStatus: 1 // to check the notification type -  success/ error/ info
  },
  reducers: {
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload.title
    },

    removeNotificationMessage: (state, action) => {
      state.newNotificationMessage = ''
    },

    showNotification: (state, action) => {
      console.log(action)
      state.newNotificationMessage = action.payload.message
      state.newNotificationStatus = action.payload.status
    }
  }
})

export const rightDrawerSlice = createSlice({
  name: 'rightDrawer',
  initialState: {
    header: '', // current  title state management
    isOpen: false, // right drawer state management for opening closing
    bodyType: '', // right drawer content management
    extraObject: {}
  },
  reducers: {

    openRightDrawer: (state, action) => {
      const { header, bodyType, extraObject } = action.payload
      state.isOpen = true
      state.bodyType = bodyType
      state.header = header
      state.extraObject = extraObject
    },

    closeRightDrawer: (state, action) => {
      state.isOpen = false
      state.bodyType = ''
      state.header = ''
      state.extraObject = {}
    }

  }
})
export const projectsSlice = createSlice({
  name: 'projectDashboard',
  initialState: { // current
    data: [] as any[]
  },
  reducers: {
    dataMutation: (state, action) => {
      const newData = [...action.payload]
      state.data = newData
    },
    addData: (state, action) => {
      const newData = [...state.data]
      newData[0]?.issues.push(action.payload.project)
      state.data = newData
    },
    onDragEnd: (state, action) => {
      const { source, destination } = action.payload
      if (!destination) {
        return
      }
      const newData = [...state.data]
      const [removeItem] = newData[source.droppableId].issues.splice(source.index, 1)
      newData[destination.droppableId].issues.splice(destination.index, 0, removeItem)
      state.data = newData
    }
  }
})

export const leftSidebarSlice = createSlice({
  name: 'leftSidebar',
  initialState: {
    isOpen: true
  },
  reducers: {

    openLeftSidebar: (state, action) => {
      const { sidebarState } = action.payload
      state.isOpen = sidebarState
    }
  }
})

const combinedReducer = {
  header: headerSlice.reducer,
  rightDrawer: rightDrawerSlice.reducer,
  leftSidebar: leftSidebarSlice.reducer,
  projects: projectsSlice.reducer

}

export default configureStore({
  reducer: combinedReducer
})
