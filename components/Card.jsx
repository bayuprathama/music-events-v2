/**
 *
 */
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import MapPin from './icons/MapPin';

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
  // const imgAvailability = imgUrl
  //   ? { backgroundImage: `url('http://localhost:1337${imgUrl.url}')` }
  //   : '';

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
      },
    },
  };
  return (
    <>
      {/* container */}
      <motion.div
        variants={item}
        className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3 xl:w-1/4"
      >
        {/* set whole card to a link */}
        {/* <a
          href="#"
          className="cursor-pointer thumb-card hover:no-underline"
        > */}

        {/* card core component */}
        <div className="flex flex-col justify-between h-full text-gray-600 rounded shadow-sm cursor-default hover:shadow-lg">
          <div className="flex flex-col justify-between flex-grow bg-white rounded">
            <div className="relative">
              {/* add bottom left text */}
              <div className="absolute bottom-3">
                <div className="inline-block px-3 py-1 text-xs font-medium text-white bg-[rgba(0,0,0,.75)] rounded">
                  {genres?.map((genre, index) => {
                    return (
                      <span key={genre.id}>
                        <span>{genre.attributes.name}</span>
                        <span>{index === genres.length - 1 ? '' : ', '}</span>
                      </span>
                    );
                  })}
                </div>
              </div>{' '}
              {/* add top right text */}
              <div
                className="inline-block w-full h-64 [ bg-top bg-no-repeat bg-cover ] rounded thumbnail md:h-44 lg:h-48"
                style={{
                  backgroundImage: `url('http://localhost:1337${imgUrl}')`,
                }}
              ></div>
            </div>

            {/* card body */}
            <div className="flex flex-col justify-between flex-1 px-4 py-4 md:px-6">
              <div>
                {/* card title */}
                <h3
                  className="mb-4 text-lg font-bold leading-tight tracking-normal uppercase line-clamp-2"
                  title={title}
                >
                  {title}
                </h3>{' '}
                {/* card info */}
                <div className="">
                  {/* date + price */}
                  <div className="flex items-center gap-4 mb-4">
                    {/* date & month */}
                    <div className="flex w-[fit-content] flex-col items-center px-4 py-2 text-xs font-bold rounded bg-slate-100">
                      <p className="text-3xl font-bold text-red-400">
                        {format(new Date(date), 'dd')}
                      </p>
                      <p className="text-gray-700 uppercase text-md">
                        {format(new Date(date), 'MMM')}
                      </p>
                    </div>
                    {/* price */}
                    <div className="flex">
                      <div className="pr-2 border-r border-gray-200">
                        <p className="font-medium">OTS</p>
                        <p className="text-sm text-gray-400">
                          IDR{' '}
                          <span className="text-lg font-bold text-gray-600">
                            {price
                              .split('')
                              .reverse()
                              .splice(3)
                              .reverse()
                              .join('')}
                            K
                          </span>
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="font-medium">Presale</p>
                        <p className="text-sm text-gray-400">
                          IDR{' '}
                          <span className="text-lg font-bold text-gray-600">
                            {price
                              .split('')
                              .reverse()
                              .splice(3)
                              .reverse()
                              .join('')}
                            K
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start mb-5 text-gray-500">
                    <ul className="flex items-start gap-2">
                      <div className="pt-1">
                        <MapPin />
                      </div>
                      <li
                        className="text-sm line-clamp-2"
                        title={`${location}, ${regency}`}
                      >
                        {location}, <span>{regency}</span>
                      </li>
                    </ul>
                  </div>
                </div>{' '}
              </div>
              <div>
                <div className="">
                  <a
                    href={`/events/${slug}`}
                    title="Check the details page of this event"
                    className="inline-block w-full px-3 py-2 text-xs font-bold text-center text-gray-500 uppercase border border-blue-500 rounded-md"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </a> */}
      </motion.div>
    </>
  );
}
