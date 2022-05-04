import Link from 'next/link';
import Card from '../../components/Card';

export default function Events({ events }) {
  // console.log(events[0]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        {events?.map((event) => {
          return (
            <Card
              key={event.title}
              title={event.title}
              imgUrl={event.imgUrl}
              time={event.time}
              date={event.date}
              location={event.location}
              regency={event.regency}
              price={event.price}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:4000/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}
