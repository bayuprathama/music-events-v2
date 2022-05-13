import Card from '../../components/Card';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Events({ events }) {
  // console.log(events[0]);
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
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <>
      {/* card */}
      {isMounted && (
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="flex flex-wrap opacity-0"
          >
            {events.data?.map((event) => {
              const { name, date, price, time, location, slug } =
                event.attributes;
              const { small: imgSmallUrl } =
                event.attributes.image.data.attributes.formats;
              const { data: genres } = event.attributes.genres;
              const { name: regency } =
                event.attributes.regency.data.attributes;
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
      )}
    </>
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
