export default function Hero() {
  return (
    <div
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
          <h1 className="mb-7 font-bold leading-[1.1] hero-font-size text-gray-800">
            Temukan event{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              musik favoritmu
            </span>{' '}
            disini.
          </h1>
          <h4 className="mb-16 text-gray-500 hero-h4-font-size max-w-[80%] mx-auto xl:max-w-[45rem]">
            Bingung mau hangout kemana? GetGigs bantu kamu temukan event musik
            menarik. Kamu juga bisa buat eventmu dan berbagi ke semua orang!
          </h4>
          <a
            className="w-[fit-content] tracking-wide px-4 py-4 font-medium rounded bg-red-400 uppercase"
            href=""
          >
            Find your next gigs!
          </a>
        </div>
      </div>
    </div>
  );
}
