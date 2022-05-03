import Image from 'next/image';

/**
 *
 */

export default function Card({
  title,
  imgUrl,
  time,
  date,
  price,
  location,
  regency,
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
        <div className="flex flex-col justify-between h-full text-gray-700 rounded-lg shadow-md cursor-default hover:shadow-xl">
          <div className="flex flex-col justify-between flex-grow bg-white rounded-lg">
            <div className="relative">
              {/* add top left text */}
              {/* <div className="absolute mt-6 ml-6 pin-t pin-l pin-r">
                <div className="inline-block px-3 py-1 text-xs font-medium text-white rounded-lg bg-pink-bright">
                    text here
                  </div>
              </div>{' '} */}

              <div
                className="inline-block w-full h-64 [ bg-top bg-no-repeat bg-cover ] rounded-t-lg thumbnail md:h-44 lg:h-48"
                style={{
                  backgroundImage: `url(${imgUrl})`,
                }}
              ></div>
            </div>
            <div className="flex flex-col justify-between flex-1 px-4 py-4 md:px-6">
              <div>
                <h3 className="mb-4 text-lg font-bold leading-tight tracking-normal uppercase">
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
                <div className="flex items-center mb-1 text-sm text-gray-700">
                  <img src="/money.png" alt="watch time" className="mr-2" />
                  <span>{price}</span>
                </div>{' '}
                <div className="flex items-center mb-4 text-sm text-gray-700">
                  <img src="/pin-fill.png" alt="watch time" className="mr-2 " />
                  <span>
                    {location}, <span>{regency}</span>
                  </span>
                </div>
                {/* <p className="mt-1 mb-4 text-sm leading-normal text-gray-500">
                  {description}
                </p> */}
              </div>{' '}
              <div>
                <div className="inline-flex items-center rounded px-2 bg-[#eae9ef] py-1 text-xs font-medium text-blue-500 uppercase">
                  <a href="#" title="Check the details page of this event">
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
