import { Paginator } from 'primereact/paginator';
import React, { useState } from 'react';

function VintedFilterList() {
  const borderStyle = {
    border: '1px solid black',
    padding: '5px',
  };

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Wartości:', title, category, sortBy, priceFrom, priceTo);
  };

  return (
    <>
      <div className="flex justify-center gap-5 w-3/4 mt-5 mx-auto">
        <div className="w-full">
          <form onSubmit={handleSearch}>
            <div className="flex gap-5 p-3 bg-gray-200 shadow-lg shadow-slate-500 rounded">
              <div className="flex flex-col w-1/6 pb-3">
                <label className="py-2">Tytuł</label>
                <input
                  type="text"
                  className="border rounded"
                  style={borderStyle}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="flex flex-col w-1/6 pb-3">
                <label className="py-2">Kategoria</label>
                <select
                  value={category}
                  className="border rounded"
                  style={borderStyle}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="   ">Wybierz kategorię</option>
                  <option value="uno">Uno</option>
                  <option value="watches">Zegarki</option>
                  <option value="puzzle">Puzzle</option>
                  <option value="games">Gry</option>
                </select>
              </div>
              <div className="flex flex-col w-1/4 pb-3">
                <label className="py-2">Sortowanie według</label>
                <select
                  value={sortBy}
                  className="border rounded"
                  style={borderStyle}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="">Wybierz Sortowanie</option>
                  <option value="likesHigher">Ulubione: od najwyższej</option>
                  <option value="likesLower">Ulubione: od najniższej</option>
                </select>
              </div>
              <div className="flex flex-col w-1/12 pb-3">
                <label className="py-2">Cena od</label>
                <input
                  value={priceFrom}
                  type="text"
                  className="border rounded"
                  style={borderStyle}
                  onChange={(e) => setPriceFrom(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-1/12 pb-3">
                <label className="py-2">Cena do</label>
                <input
                  value={priceTo}
                  type="text"
                  className="border rounded"
                  style={borderStyle}
                  onChange={(e) => setPriceTo(e.target.value)}
                />
              </div>
              <div className="flex flex-grow justify-end items-end pb-4">
                <button
                  type="submit"
                  className="bg-teal-600 w-full text-white py-1 rounded"
                >
                  Szukaj
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center gap-5 w-1/2 mt-5">
        <div className="w-1/6">
          <div className="flex flex-col p-3 bg-gray-200 shadow-lg shadow-slate-500 rounded">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Carta_uno_reverse..jpg"
                alt="img"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <h1 className="font-bold">Użytkownik</h1>
              <h1 className="text-green-800 font-bold">Cena</h1>
              <h1 className="font-bold">❤️12</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Paginator
          first={1}
          rows={2}
          totalRecords={120}
          rowsPerPageOptions={[10, 20, 30]}
        />
      </div>
    </>
  );
}

export default VintedFilterList;
