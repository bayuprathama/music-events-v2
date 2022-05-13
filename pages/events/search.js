import qs from 'qs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Card from '../../components/Card';
export default function Search({ events }) {
  const router = useRouter();
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
  console.log(events.data);
  return (
    <>
      <h3 className="px-4 pb-5 text-lg font-bold">
        Hasil pencarian &quot;{router.query.term}&quot; :
      </h3>
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
    </>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const API_URL = 'http://localhost:1337';
  const query = qs.stringify(
    {
      populate: ['genres', 'regency', 'image'],
      filters: {
        $or: [
          { name: { $containsi: term } },
          { slug: { $containsi: term } },
          { description: { $containsi: term } },
          {
            regency: {
              name: { $containsi: term },
            },
          },
          {
            genres: {
              name: { $containsi: term },
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(
    `${API_URL}/api/events?${query}&populate=image,genres,regency`
  );
  const events = await response.json();
  return {
    props: {
      events,
    },
  };
}
