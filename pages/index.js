import Link from 'next/link';
import Card from '../components/Card';

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <Card
            title="First 07 ITB STIKOM BALI"
            imgUrl="/poster-1.png"
            time="07.00 PM"
            date="29 Mei 2022"
            location="Lapangan GOR Ngurah Rai Denpasar"
            price="HTM 50K"
          />
          <Card
            title="WACKEN 2022"
            imgUrl="/wacken.jpg"
            time="07.00 PM"
            date="29 Mei 2022"
            location="Lapangan GOR Ngurah Rai Denpasar"
            price="HTM 50K"
          />
          <Card
            title="HAMMERSONIC"
            imgUrl="/poster-3.jpg"
            time="07.00 PM"
            date="29 Mei 2022"
            location="Lapangan GOR Ngurah Rai Denpasar"
            price="HTM 50K"
          />
          <Card
            title="Metallica Worldwired 2019"
            imgUrl="/poster-4.jpg"
            time="07.00 PM"
            date="29 Mei 2022"
            location="Lapangan GOR Ngurah Rai Denpasar"
            price="HTM 50K"
          />
          <Card
            title="First 07 ITB STIKOM BALI"
            imgUrl="/poster-1.png"
            time="07.00 PM"
            date="29 Mei 2022"
            location="Lapangan GOR Ngurah Rai Denpasar"
            price="HTM 50K"
          />
          <Card
            title="WACKEN 2022"
            imgUrl="/wacken.jpg"
            time="07.00 PM"
            date="29 Mei 2022"
            location="Lapangan GOR Ngurah Rai Denpasar"
            price="HTM 50K"
          />
          <Card
            title="HAMMERSONIC"
            imgUrl="/poster-3.jpg"
            time="07.00 PM"
            date="29 Mei 2022"
            location="Lapangan GOR Ngurah Rai Denpasar"
            price="HTM 50K"
          />
          <Card
            title="Metallica Worldwired 2019"
            imgUrl="/poster-4.jpg"
            time="07.00 PM"
            date="29 Mei 2022"
            location="Lapangan GOR Ngurah Rai Denpasar"
            price="HTM 50K"
          />
        </div>
      </div>
      <Link href="/events">to events page</Link>
    </div>
  );
}

/**
 *   title,
  imgUrl,
  description,
  time,
  date,
  price,
  location,
 */
