import { FaArrowCircleLeft,FaArrowCircleRight } from "react-icons/fa";
import { useState } from 'react'
const items = ['football','gaming','watching','movie','learning','gaming','watching','movie','learning']

const ShowFollowingSection = () => {
  const [firstIndex,setFirstIndex] = useState(0);
  const [lastIndex,setLastIndex] = useState(4);
  const nextButton = () => {
    if(lastIndex < items.length){
      setFirstIndex(firstIndex + 1);
      setLastIndex(lastIndex + 1);
    }
  }
  const prevButton = () => {
    if(firstIndex > 0){
    setFirstIndex(firstIndex - 1);
    setLastIndex(lastIndex - 1);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">

       <span className=" cursor-pointer" onClick={prevButton}>{firstIndex > 0 && <FaArrowCircleLeft size={25} />}</span>

        <div className="flex items-center gap-4">
          {
            items.map((item,index) => {
              if(index >= firstIndex && index < lastIndex) {
               return <span className="visible bg-gray-200 inline-block px-3 py-1 rounded-full transition-all" key={index}>{item}</span>
              }else{
                return null
              }
            })
          }
        </div>
        <span className="bg-white-500 cursor-pointer" onClick={nextButton}>{lastIndex < items.length &&<FaArrowCircleRight size={25} />}</span>

      </div>
    </div>
  )
}

export default ShowFollowingSection
