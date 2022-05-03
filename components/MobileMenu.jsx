import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classname';

const NavItem = ({ title, onClick, href }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <li
      className={`${cn(
        isActive ? 'font-bold' : ''
      )} text-gray-700 border-b border-gray-200`}
    >
      <Link href={href}>
        <a className="flex pb-5" onClick={onClick}>
          {title}
        </a>
      </Link>
    </li>
  );
};
export default function MobileMenu({ className, onNavMenuClick }) {
  return (
    <>
      <ul
        className={`${className} md:hidden absolute mt-[4.6rem] bg-white inset-0 h-screen z-40 text-gray-600 flex flex-col gap-5 pt-10 px-8`}
      >
        <NavItem title="Home" href="/" onClick={onNavMenuClick} />
        <NavItem title="Events" href="/events" onClick={onNavMenuClick} />
        <NavItem title="Dashboard" href="#" onClick={onNavMenuClick} />
      </ul>
    </>
  );
}
