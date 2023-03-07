
import React, { useState, useEffect } from 'react'
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon'

interface Props {
  labelTitle?: string
  labelDescription?: string
  defaultValue?: string
  containerStyle?: string
  labelStyle?: string
  updateType?: string
  updateFormValue: (input: { updateType: string | undefined, value: string }) => void
  options: Array<{ name: string, value: string }>

}

function SelectBox ({ labelTitle, labelDescription, defaultValue, containerStyle = '', labelStyle = '', options, updateType, updateFormValue }: Props) {
  const [value, setValue] = useState(defaultValue ?? '')

  const updateValue = (newValue: string) => {
    updateFormValue({ updateType, value: newValue })
    setValue(newValue)
  }

  return (
        <div className={`inline-block rounded-lg outline-gray-500/50 ${containerStyle}`}>
            <label className={` flex select-none items-center justify-center px-1 py-2  ${labelStyle}`}>
                <div className=" text-sm text-secondaryText">{labelTitle}
                {((labelDescription ?? '').length > 0) && <div className="tooltip tooltip-right relative inline-block text-center" data-tip={labelDescription}><InformationCircleIcon className='w-4 h-4'/></div>}
                </div>
            </label>

            <select className={` inline-flex flex-shrink-0 cursor-pointer select-none h-12 pl-4 pr-5
             min-h-12 font-semibold transition-all  outline-primaryText/50  w-full rounded-lg`} value={value} onChange={(e) => { updateValue(e.target.value) }}>
                {
                    options.map((o, k) => {
                      return <option value={o.value || o.name} key={k}>{o.name}</option>
                    })
                }
            </select>
        </div>
  )
}

export default SelectBox
