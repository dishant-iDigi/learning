import React from 'react'
import { useParams } from 'react-router-dom'

const CourseCollection = () => {
    const params = useParams();
    console.log("");
    
    return (
    <div>
      <h2>{params.id} Course Collection</h2>
    </div>
  )
}

export default CourseCollection
