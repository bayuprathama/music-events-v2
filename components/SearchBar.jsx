import SearchIcon from './icons/SearchIcon';

export default function SearchBar({ childClassName, className }) {
  return (
    <div
      className={`${className} bg-white flex items-center border rounded-md border-gray-200 `}
    >
      <div className="text-gray-300">
        <SearchIcon />
      </div>
      <input
        className={`${childClassName} bg-white w-full px-3 md:py-2 outline-none text-gray-500`}
        type="text"
        placeholder="Search events..."
      />
    </div>
  );
}
