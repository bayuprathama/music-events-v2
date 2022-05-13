import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavItem({ title, href, onClick = null }) {
  const router = useRouter();
  const isActive = router.pathname === href;
  /**
   * TODO: Fix active nav title
   */

  return (
    <li className="">
      <Link href={href}>
        <a
          onClick={onClick}
          className={`${isActive && 'font-bold'} text-gray-500 p-2`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}
