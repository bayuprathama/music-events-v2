import { motion } from 'framer-motion';

export default function Hero() {
  const container = {
    hidden: { opacity: 0, y: -15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  // const [isMounted, setIsMounted] = useState(false);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="text-white  [ xl:flex xl:item-center xl:justify-center ] pb-[5rem]"
    >
      <div className="flex items-center justify-center gap-5 [ bg-no-repeat ] px-8 py-20 mx-auto xl:max-w-[50rem]">
        <div className="flex-1 mx-auto text-center xl:order-1">
          <motion.h1
            variants={item}
            className="xl:mb-7 mb-4 font-bold leading-[1.1] hero-font-size text-gray-700"
          >
            Temukan event{' '}
            <span className="block text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              musik favoritmu
            </span>{' '}
            disini.
          </motion.h1>
          <motion.h4
            variants={item}
            className="mb-16 text-gray-500 hero-h4-font-size md:max-w-[80%] max-w-[90%] mx-auto xl:max-w-[45rem]"
          >
            GetGigs bantu kamu temukan event musik menarik. Kamu juga bisa buat
            eventmu sendiri dan bagikan ke semua orang.
          </motion.h4>
          <motion.a
            variants={item}
            className="w-[fit-content] tracking-wide px-4 py-4 font-bold rounded bg-red-400 uppercase"
            href=""
          >
            Find your next gigs!
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
