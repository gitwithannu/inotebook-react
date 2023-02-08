import React , {useEffect } from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../theme images/inotebook.png";
function Navbar() {
     const history = useHistory();
     let location = useLocation();
     useEffect(() => {
     }, [location])

     const logout = () => {
          localStorage.removeItem('token');
          history.push('/login');         
     }
     
  return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> <img className='mx-2' src ={logo} width={200} height={40} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                         <Link className={`nav-link  ${ location.pathname === "/" ? "active" :"" }`} aria-current="page" to="/">Home</Link>
                         <Link className={`nav-link  ${ location.pathname === "/about" ? "active" :"" }`} to="/about">About</Link>
{/*                          <Link className={`nav-link  ${ location.pathname === "/price" ? "active" :"" }`} to="#">Pricing</Link>
                         <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link> */}
                    </div>
                 </div>
               {!localStorage.getItem('token') ? <form className="d-flex">
                    <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                      <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>                      
                 </form> :
                      <div>
                           <Link className="btn btn-primary mx-2" to="/mynote" role="button">My Note</Link>
                           <button className="btn btn-primary mx-2" onClick={logout}>Logout</button>   
                     </div>     
               } 
               </div>
         </nav>
     )
}
export default Navbar