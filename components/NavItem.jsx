import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function NavItem({
  title,
  href,
  isActiveVariant = 'whiteText',
  onClick = null,
}) {
  const router = useRouter();
  const isActive = router.pathname === href;
  const activeVariants = {
    darkText: isActive ? 'font-bold' : '',
    whiteText: isActive ? 'text-gray-300 font-medium' : 'text-gray-400',
  };

  /**
   * TODO: Fix active nav title
   */
  // const [activeVariants, setIsActiveVariants] = useState({
  //   darkText: '',
  //   whiteText: 'text-gray-400',
  // });
  // const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   if (router.pathname === href) {
  //     setIsActive(true);
  //     setIsActiveVariants({
  //       darkText: 'font-bold',
  //       whiteText: 'text-gray-300 font-medium',
  //     });
  //   }
  // }, [router.pathname]);

  return (
    <li>
      <Link href={href}>
        <a onClick={onClick} className={activeVariants[isActiveVariant]}>
          {title}
        </a>
      </Link>
    </li>
  );
}
