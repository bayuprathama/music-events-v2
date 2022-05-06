import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import { useRouter } from 'next/router';
// import { SearchBar } from './Navigation';
import SearchBar from './SearchBar';
import Hero from './Hero';

export default function Container({ children }) {
  const router = useRouter();
  let title = '';

  switch (router.pathname) {
    case '/':
      title = 'Music Events | Find the latest gigs';
      break;
    case '/events':
      title = 'Events page';
      break;
    case '/events/add':
      title = 'Add event';
      break;
    case '/events/edit':
      title = 'Edit event';
      break;
    default:
      title = 'Music Events | Find the latest gigs';
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="place to search upcoming music events, share music events"
        />
        <meta name="keywords" content="music, events, rock, jazz, pop, gigs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navigation />

      {/* Search Bar Mobile Only*/}
      <div className="pt-1 pb-5 bg-[#0c0c0d] shadow md:hidden">
        <SearchBar
          className="justify-center w-11/12 px-3 py-1 mx-auto my-2 border border-gray-300 rounded md:hidden"
          childClassName="py-1"
        />
      </div>

      {/* Show Hero */}
      {router.pathname == '/' && <Hero />}
      <main className="container min-h-screen px-4 mx-auto mt-10 md:container lg:container xl:container">
        {children}
      </main>
      <Footer />
    </>
  );
}

Container.defaultProps = {
  title: 'Music Events',
};
