import React from 'react'
import '../App.css';

function Heading() {
  return (
    <div className='navbar'>
      <h2>Tech-shop</h2>
      <nav className="nav">
      <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">
  Tooltip on left
</button>
</nav>
    </div>
  )
}

export default Heading
