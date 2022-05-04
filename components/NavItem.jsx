import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classname';

export default function NavItem({
  title,
  href,
  isActiveVariant,
  onClick = null,
}) {
  const router = useRouter();
  const isActive = router.asPath === href;
  const isActiveVariants = {
    darkText: cn(isActive ? 'font-bold' : ''),
    whiteText: cn(isActive ? 'text-gray-300 font-medium' : 'text-gray-400'),
  };
  return (
    <li>
      <Link href={href}>
        <a onClick={onClick} className={isActiveVariants[isActiveVariant]}>
          {title}
        </a>
      </Link>
    </li>
  );
}
