import cn from 'classnames';
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
  const isActive = router.pathname === href || `${href}/[slug]`;
  console.log('asPath', router.asPath);
  console.log('pathname', router.pathname);
  console.log('href', `${href}/[slug]`);

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
    <li className="pb-5 border-b border-gray-200 lg:border-none lg:pb-0">
      <Link href={href}>
        <a
          onClick={onClick}
          className={cn(isActive ? 'font-bold' : '', 'text-gray-500')}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}
