import React from 'react'

export interface Props {
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  title: string,
  onDelete: Function
}

const propsAreEqual = (
  prevProps: Readonly<React.PropsWithChildren<Props>>,
  nextProps: Readonly<React.PropsWithChildren<Props>>
) => {
  return true; // JSON.stringify(prevProps.title) === JSON.stringify(nextProps.title);
}

const Card: React.FC<Props> = props => {
  const { onClick, title } = props

  return (
    <article
      className='bg-white shadow-md shadow-slate-400 mb-2 rounded-md p-2 w-64 break-all'
      onClick={onClick}
    >
      {title} 
      {/* <span className="relative top-0 right-0">x</span> */}
    </article>
  )
}

export default React.memo(Card, propsAreEqual)