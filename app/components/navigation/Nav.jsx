import { Navigation } from './Navigation'
import './nav.css'
import Link from 'next/link'
// import SignUpLink from './SignUpLink' 

const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Profile', href: '/user' },
    { name: 'Gallerie ', href: '/gallery' },
]

function Nav() {
    return (
        <nav>
            <div className="logo">
                <Link href='/' >Logo</Link>
            </div>
            <menu >
                <Navigation navLinks={navLinks} />
            </menu>

            <div className='btn_nav'>
                <Link href='/login' className='btn_link'>Sign in
                </Link>
            </div>
        </nav>
    )
}

export default Nav