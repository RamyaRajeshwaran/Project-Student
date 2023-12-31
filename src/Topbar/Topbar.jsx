import "./topbar.css"
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
      <i className=" home fa-solid fa-house"></i>
      </div>
      <div className="topCenter">
        <ul className="list"> 
        <li className="toplist">
        <Link to="/" style={{textDecoration:"none" ,color:"inherit"}}>Home</Link>
        </li>
            <li className="toplist">
              <Link to="/table2"style={{textDecoration:"none"
            ,color:"inherit"}}>Student Management</Link>
            </li>
            <li className="toplist">Student Marks</li>
        </ul>
      </div>
      <div className="topRight">
      <i className=" profile fa-solid fa-user"></i>
    Registeration 
      </div>
      
    </div>
  )
}

export default Topbar