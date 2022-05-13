import { useState } from 'react';
import { useRouter } from 'next/router';
import SearchIcon from './icons/SearchIcon';

export default function SearchBar({ childClassName, className }) {
  const [value, setValue] = useState('');
  const router = useRouter();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${value}`);
    setValue('');
  };
  return (
    <form
      onSubmit={handleSearchSubmit}
      className={`${className} bg-white flex items-center border rounded-md border-gray-200 `}
    >
      <div className="text-gray-300">
        <SearchIcon />
      </div>
      {/* <form onSubmit={handleSearchSubmit}> */}
      <input
        onChange={(e) => setValue(e.target.value)}
        className={`${childClassName} bg-white w-full px-3 md:py-2 outline-none text-gray-500`}
        type="text"
        placeholder="Search events..."
        value={value}
      />
      {/* </form> */}
    </form>
  );
}
