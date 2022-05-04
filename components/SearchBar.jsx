import SearchIcon from './icons/SearchIcon';

export default function SearchBar({ childClassName, className }) {
  return (
    <div
      className={`${className} bg-[#1d1d1d] flex items-center border rounded-md border-gray-700 `}
    >
      <div className="text-gray-300">
        <SearchIcon />
      </div>
      <input
        className={`${childClassName} bg-[#1d1d1d] w-full px-3 md:py-2 outline-none text-gray-300`}
        type="text"
        placeholder="Search events..."
      />
    </div>
  );
}
