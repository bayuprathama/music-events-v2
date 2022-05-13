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
      className="text-white [ bg-repeat ] [ xl:flex xl:item-center xl:justify-center ] xl:pb-24"
      // style={{ backgroundImage: "url('/pattern-tile.svg')" }}
    >
      <div
        className="flex items-center justify-center gap-5 [ bg-no-repeat ] px-8 py-16 mx-auto xl:max-w-[50rem]"
        // style={{
        //   backgroundImage: "url('/arrow-hero.svg')",
        //   backgroundPosition: 'bottom 30px left 10rem',
        // }}
      >
        {/* [ md:px-12 md:max-w-2xl ] [ lg:px-20 lg:py-40 lg:max-w-4xl ] [ xl:pt-40 xl:ml-20 ] */}
        <div className="flex-1 mx-auto text-center xl:order-1">
          <motion.h1
            variants={item}
            className="xl:mb-7 mb-4 font-bold leading-[1.1] hero-font-size text-gray-800"
          >
            Temukan event{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              musik favoritmu
            </span>{' '}
            disini.
          </motion.h1>
          <motion.h4
            variants={item}
            className="mb-16 text-gray-500 hero-h4-font-size md:max-w-[80%] max-w-[90%] mx-auto xl:max-w-[45rem]"
          >
            Bingung mau hangout kemana? GetGigs bantu kamu temukan event musik
            menarik. Kamu juga bisa buat eventmu sendiri dan bagikan ke semua
            orang.
          </motion.h4>
          <motion.a
            variants={item}
            className="w-[fit-content] tracking-wide px-4 py-4 font-medium rounded bg-red-400 uppercase"
            href=""
          >
            Find your next gigs!
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
