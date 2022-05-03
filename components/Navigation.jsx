import cn from 'classname';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import MobileMenu from './MobileMenu';
import MenuOpen from './icons/MenuOpen';
import MenuClose from './icons/MenuClose';
import SearchIcon from './icons/SearchIcon';
import logo from './icons/logo.svg';
import { useRouter } from 'next/router';

// Navigation item component
export function NavItem({ title, href }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <li>
      <Link href={href}>
        <a
          className={cn(
            isActive ? 'text-gray-700 font-medium' : 'text-gray-500'
          )}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

// Search bar component
export function SearchBar({ childClassName, className }) {
  return (
    <div
      className={`${className} bg-white flex items-center border rounded-md border-gray-300 `}
    >
      <div className="text-gray-300">
        <SearchIcon />
      </div>
      <input
        className={`${childClassName} w-full px-3 md:py-2 outline-none text-gray-500`}
        type="text"
        placeholder="Search events..."
      />
    </div>
  );
}

// Main Navigation component
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
    isMenuOpen
      ? (document.body.style.overflow = '')
      : (document.body.style.overflow = 'hidden');
  };

  useEffect(() => {
    return function cleanUp() {
      document.body.style.overflow = '';
    };
  }, []);

  const onNavMenuClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };
  const onSignInButtonClick = () => {
    /**
     * TODO: add sign in logic
     */
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-6 text-gray-900 bg-white border-b border-gray-200 md:px-10">
      <div className="flex gap-4">
        {/* Mobile Menu Button */}
        <div
          onClick={handleMenuClick}
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          className="text-gray-500 cursor-pointer md:hidden"
        >
          {isMenuOpen ? <MenuClose /> : <MenuOpen />}
        </div>
        {/* Logo */}
        <div className="text-orange-500 md:w-auto w-[120px]">
          <Link href="/">
            <a onClick={onNavMenuClick}>
              <Image alt="logo" src={logo} />
            </a>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-5">
        {/* Search bar */}
        <SearchBar className="hidden px-3 md:flex" childClassName="py-1" />
        <ul className="hidden gap-5 md:flex md:justify-center">
          <NavItem title="Events" href="/events" />
          <NavItem title="Temp Home" href="/" />
          <NavItem title="something" href="#" />
        </ul>

        {/* Sign in */}
        <a
          className="px-4 py-2 font-medium text-gray-200 bg-blue-500 rounded-md cursor-pointer leading-[1] text-sm"
          onClick={onSignInButtonClick}
        >
          Sign in
        </a>

        <MobileMenu
          className={cn(isMenuOpen ? 'flex' : 'hidden')}
          onNavMenuClick={onNavMenuClick}
        />
      </div>
    </nav>
  );
}
