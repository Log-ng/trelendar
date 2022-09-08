import React, { useState, useEffect, useRef } from 'react'
import { Card } from '../../types'
import { AiOutlineClose } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

interface Props {
  onCancel: Function;
  onAdd: Function;
  t: Function;
}

const NewCardForm: React.FC<Props> = (props) => {
  const {onAdd, onCancel, t} = props
  const wrapperRef = useRef(null)

  const useOutsideCancel = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {       
        if (ref.current && !ref.current.contains(event.target)) {
          onCancel()
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      };
    }, [ref]);
  }
  useOutsideCancel(wrapperRef)
  
  const [card, setCard] = useState<Card>({
    id: Date.now().toString(),
    title: '',
    description: '',
    label: '',
  })

  const handleKeypress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") handleAdd()
  }

  const handleAdd = () => {
    onAdd(card)    
  }

  return (
    <div ref={wrapperRef}>
        <input
          type="text"
          className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 block w-full p-3 pb-9"
          placeholder='Enter the tilte of this card'
          required
          autoFocus
          onChange={e => setCard({
            ...card,
            title: e.target.value
          })}
          onKeyDown={e => handleKeypress(e)}
        />
        <div className='grid grid-cols-10'>
          <div className='flex col-span-9'>
            <button 
              className="bg-sky-600 text-white rounded px-4 py-1.5 justify-start" 
              onClick={handleAdd} 
            >  
              Add
            </button>
            <div className='pt-1 pl-3 cursor-pointer'>
              <AiOutlineClose size={25} color='gray' onClick={() => onCancel()}/>
            </div>
          </div>
          <div className='pt-1.5 '>
            <BsThreeDots className='cursor-pointer' size={25} color='gray'/>
          </div>
        </div>

    </div>
  )
};

export default NewCardForm
