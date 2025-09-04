import { Link } from 'react-router-dom'
import mainLogo from '../assets/mainlogo.jpg'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Schemes', href: '/scheme' },
  { name: 'Contact Us', href: '#' },
]

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow px-8 py-3 sticky top-0 z-10">
      <div>
        <img src={mainLogo} alt="Ministry of Tribal Affairs Logo" className="h-18 w-auto" />
      </div>
      <ul className="flex gap-8 list-none m-0 p-0">
        {navLinks.map(link => (
          <li key={link.name}>
            {link.href.startsWith('/') ? (
              <Link
                to={link.href}
                className="text-gray-800 no-underline font-medium text-lg pb-1 border-b-2 border-transparent hover:text-emerald-500 hover:border-emerald-500 transition"
              >
                {link.name}
              </Link>
            ) : (
              <a
                href={link.href}
                className="text-gray-800 no-underline font-medium text-lg pb-1 border-b-2 border-transparent hover:text-emerald-500 hover:border-emerald-500 transition"
              >
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar