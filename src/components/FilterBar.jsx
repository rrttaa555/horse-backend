import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  return (
    <div>
      <input
        type="number"
        placeholder="Prezzo massimo"
        value={filters.prezzo}
        onChange={e => setFilters({ ...filters, prezzo: e.target.value })}
      />
      <input
        type="number"
        placeholder="Età"
        value={filters.età}
        onChange={e => setFilters({ ...filters, età: e.target.value })}
      />
      <select
        value={filters.luogo}
        onChange={e => setFilters({ ...filters, luogo: e.target.value })}
      >
        <option value="">Tutti i luoghi</option>
        <option value="Roma">Roma</option>
        <option value="Milano">Milano</option>
        <option value="Torino">Torino</option>
      </select>
    </div>
  );
};

export default FilterBar;
