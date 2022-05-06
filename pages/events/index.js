import Card from '../../components/Card';

export default function Events({ events }) {
  // console.log(events[0]);

  return (
    <>
      {/* card */}
      <div className="container mx-auto">
        <div className="flex flex-wrap">
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
