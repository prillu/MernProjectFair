import React from 'react'
import Add from './Add'
import Edit from './Edit'

const View = () => {
  return (
   <>
      <div className="d-flex justify-content-between mt-2">
        <h2 className="text-warning">All Projects</h2>
        <div><Add/></div>
      </div>
      <div className="mt-2">
        <div className="border rounded p-2 d-flex justify-content-between mb-3">
<h3>Title</h3>
<div className="d-flex align-items-center">
<div><Edit/></div>
<div className="btn"><a href="" target='_blank'><i class="fa-brands fa-github"></i></a></div>
<button className="btn text-danger"><i class="fa-solid fa-trash"></i></button>
</div>
        </div>
      </div>
        
     </> 
  )
}

export default View
