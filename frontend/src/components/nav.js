import {Link} from 'react-router-dom'

import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import { useState } from 'react'

const Nav = () => {
    const {user} = useAuthContext()
    const {logout} = useLogout() 
    const [bord, setBord] = useState(0)
    
    const handleClick = () => {
        logout()
    }

    const navStyle = {gridTemplateColumns : 'auto auto auto auto auto auto auto auto auto'}

    const navNone = {}

    const bordDes = {borderBottom: '3px solid #eee'}

    const bordNone = {}

    return(
        <div id='nav' style={!user ? navNone : navStyle}>
            <div className='logo'><Link to='/'><h2 className='logoname'>READ</h2></Link></div>
            <div className='gap'></div>
            {!user && <Link to='/login' className='login' onClick={() => setBord(1)} style={bord === 1 ? bordDes : bordNone}>Log In</Link>}
            {!user && <Link to='/signupForm' className='signup' onClick={() => setBord(2)} style={bord === 2 ? bordDes : bordNone}>Sign Up</Link>}
            {user && <Link to='/home' className='home' onClick={() => setBord(3)} style={bord === 3 ? bordDes : bordNone}>Home</Link>}
            {user && user.is_admin && <Link to='/dashboard' className='dashboard' onClick={() => setBord(4)} style={bord === 4 ? bordDes : bordNone}>Dashboard</Link>}
            {user && !user.is_admin && <Link to='/uploadPdf' className='uploadPdf' onClick={() => setBord(5)} style={bord === 5 ? bordDes : bordNone}>Upload a Pdf</Link>}
            {user && <Link className='logout' onClick={handleClick}>Log Out</Link>}
        </div>
    )
}
//
export default Nav