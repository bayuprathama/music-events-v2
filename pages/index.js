import Link from 'next/link';
import Card from '../components/Card';
import { motion } from 'framer-motion';

export default function Home({ events }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.015,
      },
    },
  };
  // const { id } = events.data;
  // const { name, date, price, time, location } = event.data.attributes;
  // const { small: imgSmallUrl } =
  //   event.data.attributes.image.data.attributes.formats;
  // const { data: genres } = event.data.attributes.genres;
  // const { name: regency } = event.data.attributes.regency.data.attributes;
  // console.log(events.data);
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.2,
          },
        }}
        className="px-4 mb-10 text-2xl font-medium text-gray-600 lg:text-3xl"
      >
        Upcoming events in <span className="font-bold">Denpasar</span>
      </motion.h3>

      {/* card */}
      <div className="mx-auto ">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="flex flex-wrap"
        >
          {events.data?.map((event) => {
            const { name, date, price, time, location, slug } =
              event.attributes;
            const { small: imgSmallUrl } =
              event?.attributes?.image?.data?.attributes?.formats;
            const { data: genres } = event.attributes.genres;
            const { name: regency } = event.attributes.regency.data.attributes;
            return (
              <Card
                key={event.id}
                title={name}
                imgUrl={imgSmallUrl.url}
                time={time}
                date={date}
                location={location}
                regency={regency}
                price={price}
                genres={genres}
                slug={slug}
              ></Card>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:1337/api/events?fields=name,date,time,price,location,slug&populate=image,genres,regency`
  );
  const events = await res.json();

  return {
    props: { events },
  };
}
