import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
export default function MobileMenu({ className, isMenuOpen, onNavLinkClick }) {
  /**
   * TODO: motion not working [solved]
   * TODO: refactor motion code when open and close
   */

  const container = {
    hidden: {
      opacity: 1,
      x: '-100vw',
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.1,
        type: 'tween',
        staggerChildren: 0.07,
        duration: 0.1,
      },
    },
  };
  const containerClose = {
    show: {
      opacity: 1,
      x: 0,
    },
    close: {
      opacity: 1,
      x: '-100vw',
      transition: {
        duration: 0.1,
      },
    },
  };

  // const router = useRouter();
  // const isActive = router.pathname === href;
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const itemClose = {
    hidden: { opacity: 1 },
    show: { opacity: 0 },
  };

  return (
    <>
      {isMenuOpen ? (
        <motion.ul
          className={`${className} absolute md:mt-[5.7rem] mt-[5rem] bg-white inset-0 h-screen z-40 text-gray-600 flex flex-col gap-5 pt-10 px-8`}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.li
            variants={item}
            className="pb-5 border-b border-gray-200 lg:border-none lg:pb-0"
          >
            <Link href="/">
              <a onClick={onNavLinkClick} className="font-bold text-gray-500">
                Home
              </a>
            </Link>
          </motion.li>
          <motion.li
            variants={item}
            className="pb-5 border-b border-gray-200 lg:border-none lg:pb-0"
          >
            <Link href="/events">
              <a onClick={onNavLinkClick} className="font-bold text-gray-500">
                Events
              </a>
            </Link>
          </motion.li>
          <motion.li
            variants={item}
            className="pb-5 border-b border-gray-200 lg:border-none lg:pb-0"
          >
            <Link href="/events/create">
              <a onClick={onNavLinkClick} className="font-bold text-gray-500">
                Create events
              </a>
            </Link>
          </motion.li>
        </motion.ul>
      ) : (
        <motion.ul
          className={`${className} absolute md:mt-[5.7rem] mt-[5rem] bg-white inset-0 h-screen z-40 text-gray-600 flex flex-col gap-5 pt-10 px-8`}
          variants={containerClose}
          initial="show"
          animate="close"
        >
          <motion.li
            variants={itemClose}
            className="pb-5 border-b border-gray-200 lg:border-none lg:pb-0"
          >
            <Link href="/">
              <a onClick={onNavLinkClick} className="font-bold text-gray-500">
                Home
              </a>
            </Link>
          </motion.li>
          <motion.li
            variants={itemClose}
            className="pb-5 border-b border-gray-200 lg:border-none lg:pb-0"
          >
            <Link href="/events">
              <a onClick={onNavLinkClick} className="font-bold text-gray-500">
                Events
              </a>
            </Link>
          </motion.li>
          <motion.li
            variants={itemClose}
            className="pb-5 border-b border-gray-200 lg:border-none lg:pb-0"
          >
            <Link href="/events/create">
              <a onClick={onNavLinkClick} className="font-bold text-gray-500">
                Create events
              </a>
            </Link>
          </motion.li>
        </motion.ul>
      )}
    </>
  );
}
