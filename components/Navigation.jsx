import cn from 'classname';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import MobileMenu from './MobileMenu';
import MenuOpen from './icons/MenuOpen';
import MenuClose from './icons/MenuClose';
import logo from './icons/logo.svg';
import SearchBar from './SearchBar';
import NavItem from './NavItem';

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

  const onNavLinkClick = () => {
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
    <nav className="relative z-50 flex items-center justify-between px-6 py-6 text-gray-300 bg-[#0c0c0d] md:px-10">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <div
          onClick={handleMenuClick}
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          className="text-gray-300 cursor-pointer lg:hidden"
        >
          {isMenuOpen ? <MenuClose /> : <MenuOpen />}
        </div>
        {/* Logo */}
        <div className="text-orange-500 md:w-auto w-[120px]">
          <Link href="/">
            <a onClick={onNavLinkClick}>
              <Image alt="logo" src={logo} />
            </a>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-5">
        {/* Search bar */}
        <SearchBar className="hidden px-3 md:flex" childClassName="py-1" />
        <ul className="hidden gap-5 lg:flex lg:justify-center">
          <NavItem title="Events" href="/events" isActiveVariant="whiteText" />
          <NavItem title="Temp Home" href="/" isActiveVariant="whiteText" />
          <NavItem title="something" href="#" isActiveVariant="whiteText" />
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
          onNavLinkClick={onNavLinkClick}
        />
      </div>
    </nav>
  );
}
