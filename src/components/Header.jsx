
import React from 'react'
const Header = ({ onSearch, filters, onFilterChange, genres }) => {
  return (
    <>
      <header className="p-4 bg-[#e4e4e4]  sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex flex-col text-center lg:flex-row lg:items-center lg:justify-between gap-3 header_sec">
          <h1 className="text-lg font-bold text-sky-800">🎬 Movie Reviews</h1>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              style={{ border: "1px solid #9f9f9f" }}
              placeholder="Search movies..."
              className="px-3 py-2 border rounded-md w-full  text-sm sm:w-72 outline-none "
              onChange={(e) => onSearch(e.target.value)}
            />

            <select
              className="px-3 py-2 border rounded-md w-full sm:w-40 text-sm outline-none "
              value={filters.genre}
              style={{ border: "1px solid #9f9f9f" }}
              onChange={(e) =>
                onFilterChange({ ...filters, genre: e.target.value })
              }
            >
              <option value="" style={{ border: "1px solid #9f9f9f" }}>
                All Genres
              </option>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>

            <select
              style={{ border: "1px solid #9f9f9f" }}
              className="px-3 py-2 border rounded-md w-full sm:w-32 text-sm outline-none "
              value={filters.year}
              onChange={(e) =>
                onFilterChange({ ...filters, year: e.target.value })
              }
            >
              <option value="">All Years</option>
              {Array.from({ length: 30 }).map((_, i) => {
                const y = 2025 - i;
                return (
                  <option key={y} value={String(y)}>
                    {y}
                  </option>
                );
              })}
            </select>

            <select
              className="px-3 py-2 border rounded-md w-full sm:w-32 text-sm outline-none"
              style={{ border: "1px solid #9f9f9f" }}
              value={filters.rating}
              onChange={(e) =>
                onFilterChange({ ...filters, rating: Number(e.target.value) })
              }
            >
              <option value={0}>All Ratings</option>
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>
                  {r}+ Stars
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header

