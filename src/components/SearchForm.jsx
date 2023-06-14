import { useState } from 'react';
const SearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <form className="max-w-sm mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="flex items-center border-b-2 border-slate-950 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Ingrese una ciudad"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
