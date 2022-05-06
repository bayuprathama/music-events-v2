import NavItem from './NavItem';

export default function MobileMenu({ className, onNavLinkClick }) {
  return (
    <>
      <ul
        className={`${className} xl:hidden absolute mt-[5.8rem] bg-white inset-0 h-screen z-40 text-gray-600 flex flex-col gap-5 pt-10 px-8`}
      >
        <NavItem
          title="Home"
          href="/"
          onClick={onNavLinkClick}
          isActiveVariant="darkText"
        />
        <NavItem
          title="Events"
          href="/events"
          onClick={onNavLinkClick}
          isActiveVariant="darkText"
        />
        <NavItem
          title="Create Event"
          href="/events/create"
          onClick={onNavLinkClick}
          isActiveVariant="darkText"
        />
      </ul>
    </>
  );
}
