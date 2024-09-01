import React, { useContext } from 'react'
import './navBar.css'
import { Link, useLocation } from 'react-router-dom'
import RecipeContext from '../../context/RecipeContext';
const Navbar = () => {
  const location = useLocation();
  const ispage = location.pathname === '/login' || location.pathname === '/signup' ||location.pathname === '/admin/add' || location.pathname === '/admin/users' || location.pathname === '/admin/feedback'
  const isAdmin = location.pathname === '/admin'
  const { isAuthenticate } = useContext(RecipeContext)

  if (isAdmin) {
    return null
  }
  return (
    <>
      {ispage ? (<nav className='l-nav'>
        <img className='bg' src="/nav.png" alt="" />
        <img className='logo' src="/logo.png" alt="" />
      </nav>) : (<nav >
        <div className='img'>
          <img src="/nav.png" alt="" />
          {!isAuthenticate && (
            <ul className='not-login'>
              <li><img src="/logo.png" alt="" /></li>
              <div>
                <li><Link to={'/login'}><button>LOG IN</button></Link></li>
                <li><Link to={'/signup'}><button>SIGN UP</button></Link></li>
              </div>
            </ul>
          )}
          {isAuthenticate && (
            <ul>
              <li><a href="/">HOME</a></li>
              <li><Link to={'/favourite'}>FAVOURITE</Link></li>
              <li><img className='ii' src="/logo.png" alt="" /></li>
              <li><Link to={'/contact'}>CONTACT US</Link></li>
              <li><Link to={'/profile'}><button>Profile</button></Link></li>
            </ul>
          )}

        </div>
      </nav >)
      }

    </>
  )
}

export default Navbar