export default function Hero() {
  return (
    <div
      className="text-white bg-right bg-no-repeat bg-cover xl:min-h-screen"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="flex flex-col justify-center px-8 py-20 [ md:px-12 md:max-w-2xl ] [ lg:px-20 lg:py-40 lg:max-w-4xl ] [ xl:pt-40 xl:ml-20 ]">
        <h3 className="mb-3 text-xl font-medium lg:text-2xl">
          Kamu lagi cari gigs?
        </h3>
        <h1 className="font-bold leading-none mb-7 hero-font-size">
          Temukan event musik favoritmu disini!
        </h1>
        <a
          className="w-[fit-content] text-md px-4 py-2 rounded bg-orange-500"
          href=""
        >
          Find your next gigs!
        </a>
      </div>
    </div>
  );
}
