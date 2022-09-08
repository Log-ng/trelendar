import { useState } from 'react'
import * as React from 'react'
//  @ts-ignore: This library don't find in @type/...
import Board from 'react-trello'
import { mockData } from './mockData'
import Card from '../../components/work.space/Card'
import NewCardForm from '../../components/work.space/NewCardForm'

const Workspace: React.FC = () => {
  const [lists, setLists] = useState<Object>(mockData)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  
  const onCardAdd = (card: Object, laneId: string) => {
    console.log( "onCardAdd->>>>>>>>>", card)

  }
  const onCardClick = (cardId: string, metadata: string, laneId: string) => {
    console.log( "Click -> card", cardId)
  }

  return (
    <>
      <button className="bg-lime-600 " onClick={() => {setIsEdit(!isEdit)}}>
        {isEdit? "Disble edit": "Edit"}
      </button>
      <Board 
        laneStyle={{ maxHeight: '100%'}}
        data={lists} 
        draggable={isEdit}
        editable={isEdit}
        canAddLanes={isEdit}
        // addLaneTitle="Add Long"
        // addCardTitle="Add Item"
        onCardAdd={onCardAdd}
        hideCardDeleteIcon={!isEdit}
        components={{Card, NewCardForm}}
        onCardClick={onCardClick}
      />
    </>
  )
}

export default Workspace