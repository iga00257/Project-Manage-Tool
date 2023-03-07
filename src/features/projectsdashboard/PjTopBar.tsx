import SelectBox from '../../components/Input/SelectBox'
import ArrowDownTrayIcon from '@heroicons/react/24/outline/ArrowDownTrayIcon'
import PlusIcon from '@heroicons/react/24/outline/PlusIcon'
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon'
import EllipsisVerticalIcon from '@heroicons/react/24/outline/EllipsisVerticalIcon'
import InputText from '../../components/Input/InputText'
import { projectsSlice } from '../../app/store'
import ModalLayout from '../../containers/ModalLayout'
import { useEffect, useState } from 'react'
import { current } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const periodOptions = [
  { name: 'Object Detection', value: 'Object Detection' },
  { name: 'Classification', value: 'classification' },
  { name: 'Segmentation', value: 'segmentation' }
]
const backboneOptions = [
  { name: 'ResNet50', value: 'ResNet50' },
  { name: 'DarkNet 19/53', value: 'DarkNet 19/53' },
  { name: 'VGG16', value: 'VGG16' }
]
const modelOptions = [
  { name: 'YOLO', value: 'YOLO' }
]
interface project {
  id: string
  name: string
  type: string
}
function ProjectDashBoardTopBar () {
  const dispatch = useDispatch()
  const [project, setProjectData] = useState<project>({ id: Math.random().toString(), name: '', type: periodOptions[0].value })
  const updateSelectBoxValue = ({ updateVar, value }) => {
    setProjectData((currentState) => ({ ...currentState, type: value }))
  }
  const saveNewProject = () => {
    dispatch(projectsSlice.actions.addData({ project }))
  }
  const updateFormValue = (data) => {
    setProjectData((currentState) => ({ ...currentState, name: data.value }))
  }
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* add card modal */}
            {/* <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
                <h3 className="font-semibold text-2xl pb-6 text-center">Add new Project</h3>
                 <InputText type="text" updateType="prjectName" containerStyle="mt-4 w-3/4" labelTitle="Project Name" updateFormValue={updateFormValue}/>
                 <SelectBox
                options={periodOptions}
                labelTitle=" Select Project type"
                placeholder="Select Task Type"
                containerStyle="w-3/4 mt-4"
                defaultValue="TODAY"
                updateFormValue={updateSelectBoxValue}
            />
            <SelectBox
                options={modelOptions}
                labelTitle=" Select Project type"
                placeholder="Select Task Type"
                containerStyle="w-3/4 mt-4"
                defaultValue="TODAY"
                updateFormValue={updateSelectBoxValue}
            />
            <SelectBox
                options={backboneOptions}
                labelTitle=" Select Project type"
                placeholder="Select Task Type"
                containerStyle="w-3/4 mt-4"
                defaultValue="TODAY"
                updateFormValue={updateSelectBoxValue}
            />
                <div className="modal-action">
                    <label htmlFor="my-modal-4" className="btn btn-primary px-6" onClick={() => {
                      if ((project.name.length === 0) || (project.type.length === 0)) {
                        return
                      }
                      saveNewProject()
                    }}>Save</label>
                </div>
            </label>
            </label> */}
            {/* topbar */}
            <div className="">
            <SelectBox
                options={periodOptions}
                labelTitle="Period"
                placeholder="Select Task Type"
                containerStyle="w-72"
                labelStyle="hidden"
                defaultValue="TODAY"
                updateFormValue={updateSelectBoxValue}
            />
            </div>
            <div className="text-right ">
                <label htmlFor="my-modal-4" className="btn btn-primary btn-sm normal-case"><PlusIcon className="w-4 mr-2"/>Build Project</label>
                <div className="dropdown dropdown-bottom dropdown-end  ml-2">
                    <label tabIndex={0} className="btn btn-ghost btn-sm normal-case btn-square "><EllipsisVerticalIcon className="w-5"/></label>
                    <ul tabIndex={0} className="dropdown-content menu menu-compact  p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a><EnvelopeIcon className="w-4"/>Email Digests</a></li>
                        <li><a><ArrowDownTrayIcon className="w-4"/>Download</a></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default ProjectDashBoardTopBar
