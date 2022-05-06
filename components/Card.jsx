/**
 *
 */

// genres = data.a

export default function Card({
  title,
  imgUrl,
  time,
  date,
  price,
  location,
  regency,
  genres,
  slug,
}) {
  return (
    <>
      {/* container */}
      <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3 xl:w-1/4">
        {/* set whole card to a link */}
        {/* <a
          href="#"
          title="Click to see more details about our Vue.js Course, The Vue.js 3 Masterclass"
          className="cursor-pointer thumb-card hover:no-underline"
        > */}

        {/* card core component */}
        <div className="flex flex-col justify-between h-full text-gray-700 rounded-lg shadow cursor-default hover:shadow-lg">
          <div className="flex flex-col justify-between flex-grow bg-white rounded-lg">
            <div className="relative">
              {/* add bottom left text */}
              <div className="absolute bottom-3">
                <div className="inline-block px-3 py-1 text-xs font-medium text-white bg-[rgba(0,0,0,.75)] rounded-r-md">
                  {genres?.map((genre) => {
                    return (
                      <span key={genre.id}>
                        <span>{genre.attributes.name}</span>
                        <span> </span>
                      </span>
                    );
                  })}
                </div>
              </div>{' '}
              <div
                className="inline-block w-full h-64 [ bg-top bg-no-repeat bg-cover ] rounded-t-lg thumbnail md:h-44 lg:h-48"
                style={{
                  backgroundImage: `url('http://localhost:1337${imgUrl.url}')`,
                }}
              ></div>
            </div>
            <div className="flex flex-col justify-between flex-1 px-4 py-4 md:px-6">
              <div>
                <h3
                  className="mb-4 text-lg font-bold leading-tight tracking-normal uppercase line-clamp-2"
                  title={title}
                >
                  {/**
                   * TODO: wrap title with <a> tag, direct to details page
                   */}
                  {title}
                </h3>{' '}
                <div className="flex items-center mb-1 text-sm font-medium text-orange-500">
                  <img src="/time.png" alt="watch time" className="mr-2" />
                  <span>
                    {date}, {time}
                  </span>
                </div>{' '}
                <div className="flex items-start mb-1 text-sm text-gray-700">
                  <img
                    src="/pin-fill.png"
                    alt="watch time"
                    className="pt-[2px] mr-2"
                  />

                  <span>
                    <p
                      className="line-clamp-2"
                      title={`${location}, ${regency}`}
                    >
                      {location}, <span>{regency}</span>
                    </p>
                  </span>
                </div>
                <div className="flex items-center mb-4 text-sm text-gray-700">
                  <img src="/money.png" alt="watch time" className="mr-2" />
                  <span>HTM Rp{price}</span>
                </div>{' '}
                {/* <p className="mt-1 mb-4 text-sm leading-normal text-gray-500">
                  {description}
                </p> */}
              </div>{' '}
              <div>
                <div className="w-[fit-content] ">
                  <a
                    href={`/events/${slug}`}
                    title="Check the details page of this event"
                    className="px-3 py-1 text-xs font-medium text-gray-500 uppercase bg-gray-100 border border-transparent rounded hover:border hover:border-gray-200"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </a> */}
      </div>
    </>
  );
}
