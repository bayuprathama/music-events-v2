import Image from 'next/image';
const API_URL = 'http://localhost:1337';

export default function Events({ event }) {
  console.log(event.attributes.image.data.attributes);
  const { name, date, description, location, price, time } = event.attributes;
  const { url: imageUrl } = event.attributes.image.data.attributes;
  const { name: regency } = event.attributes.regency.data.attributes;
  const { data: genres } = event.attributes.genres;
  return (
    <div className="mx-auto md:max-w-3xl">
      <h1 className="text-2xl font-bold">{name}</h1>
      <div>
        <h4 className="font-medium text-orange-500">{`${date}, ${time}`}</h4>
      </div>
      <div className="flex gap-1 text-xs text-slate-400">
        Genres:
        {genres.map((genre) => {
          return <p key={genre.id}>{genre.attributes.name}</p>;
        })}
      </div>
      <div className="mt-6 xl:flex xl:items-start xl:gap-4">
        <div className="mb-6 xl:w-2/4 w-[80%] mx-auto">
          <img src={`http://localhost:1337${imageUrl}`} alt="event-poster" />
        </div>

        <div className="xl:w-2/4">
          <div className="mb-2">
            <h4 className="font-bold">Lokasi :</h4>
            <h4 className="">{`${location}, ${regency}`}</h4>
          </div>
          <div className="mb-2">
            <h4 className="font-bold">Harga tiket masuk :</h4>
            <h4 className="">Rp{price}</h4>
          </div>
          <div className="mb-2">
            <h4 className="font-bold">Deskripsi :</h4>
            <h4 className="">{description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(
    `http://localhost:1337/api/events?filters[slug]=${slug}&populate=*`
  );
  const event = await res.json();
  console.log(slug);
  console.log(`${API_URL}/api/events?filters[slug]=${slug}&populate=*`);
  return {
    props: {
      event: event.data[0],
    },
  };
}
// http://localhost:1337/api/events?filters[slug]=wacken-2022&populate=*
