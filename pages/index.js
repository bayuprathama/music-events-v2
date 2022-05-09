import Link from 'next/link';
import Card from '../components/Card';

const CARD_URL =
  'http://localhost:1337/api/events?fields=name,date,time,price,slug&populate=genres,regencies,image';

export default function Home({ events }) {
  // const { id } = events.data;
  // const { name, date, price, time, location } = event.data.attributes;
  // const { small: imgSmallUrl } =
  //   event.data.attributes.image.data.attributes.formats;
  // const { data: genres } = event.data.attributes.genres;
  // const { name: regency } = event.data.attributes.regency.data.attributes;
  // console.log(events.data);
  return (
    <div>
      <h3 className="px-4 mb-10 text-2xl font-medium text-gray-600 lg:text-3xl">
        Upcoming events in <span className="font-bold">Denpasar</span>
      </h3>

      {/* card */}
      <div className="container mx-auto">
        <div className="flex flex-wrap">
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
                imgUrl={imgSmallUrl}
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
        </div>
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
