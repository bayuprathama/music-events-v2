export default function Hero() {
  return (
    <div
      className="text-white [ bg-center bg-no-repeat bg-cover ] xl:min-h-screen"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="flex flex-col justify-center px-8 py-20 [ md:px-12 md:max-w-2xl ] [ lg:px-20 lg:py-40 lg:max-w-4xl ] [ xl:pt-40 xl:ml-20 ]">
        {/* <h3 className="mb-1 text-md md:mb-3 lg:text-2xl">
          Kamu lagi cari gigs?
        </h3> */}
        <h1 className="mb-2 font-bold leading-[1.1] hero-font-size">
          Temukan event musik favoritmu disini!
        </h1>
        <h4 className="max-w-[250px] md:max-w-md text-[#c3c3c3] leading-tight hero-h4-font-size mb-7">
          Bingung mau hangout kemana? Coba temukan event musik yang menarik
          disini. Kamu juga bisa buat eventmu sendiri dan berbagi ke semua
          orang!
        </h4>
        <a
          className="w-[fit-content] text-xs tracking-wide px-4 py-4 font-medium rounded bg-orange-500 uppercase"
          href=""
        >
          Find your next gigs!
        </a>
      </div>
    </div>
  );
}
