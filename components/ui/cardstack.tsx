import { Volume2 } from 'lucide-react'
import React from 'react'

type Props = {}

const handleclick = () => {
  console.log("make some changes so that you can see the actually changes")
}

export default function Cardstack({}: Props) {
  return (

    <div onClick={handleclick} className="w-48 h-64 m-4 bg-white border-2 border-[#323232] shadow-[4px_4px_0_#323232] rounded-md flex flex-col items-center justify-center">
      <div className="text-center text-[#323232] text-lg font-normal">
       <h1>collection name</h1>
        <span className="text-sm text-[#666]">collection description</span>
        <Volume2 />
      </div>
    </div>

  )
}