import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSearch(location);
    setLoading(false);
  };

  return (
    <form className="max-w-sm mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="flex items-center border-b-2 border-slate-950 py-2">
        <input
          className="appearance-none border-none w-full text-black mr-3 py-1 px-2 capitalize"
          type="text"
          placeholder="Ingrese una ciudad"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          <FaSearch className="inline-block align-baseline mr-1" />
          Buscar
        </button>
      </div>
      {loading && (
        <div className="flex justify-center mt-3">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
