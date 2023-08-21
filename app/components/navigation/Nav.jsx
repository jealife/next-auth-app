import { Navigation } from './Navigation'
import './nav.css'
import Link from 'next/link'
// import SignUpLink from './SignUpLink' 

const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Profile', href: '/user' },
    { name: 'Gallerie ', href: '/gallery' },
    { name: 'Admin ', href: '/admin' },
]

function Nav() {
    return (
        <nav>
            <menu >
                <Navigation navLinks={navLinks} />
            </menu>

            <div className='btn_nav'>
                <Link href='signup' className='btn_link'>Sign Up
                </Link>
            </div>
        </nav>
    )
}

export default Nav