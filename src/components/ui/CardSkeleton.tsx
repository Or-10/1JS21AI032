import React from 'react'

const CardSkeleton = () => {
  return (
    <div className="flex  gap-4 w-52">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
    </div>
  )
}

export default CardSkeleton
