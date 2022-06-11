import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Index = () => {

    const [drop, setDropdown] = useState(false);

  return (
    <div className="header">
        <div className="sec1">
<h5> Dashboard </h5>
        </div>


        <div className="sec2">
    {/* <h6> Menu </h6> */}
        </div>


        <div className="sec3">
        <div className={drop ? 'dropdown show' : 'dropdown'}>
  <a className="btn  dropdown-toggle" href="#" onClick ={() => setDropdown(!drop)} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Mr Raji
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <Link to ="/logout" className="lnk">Logout</Link>
  </div>
</div>
        </div>
    </div>
  )
}

export default Index