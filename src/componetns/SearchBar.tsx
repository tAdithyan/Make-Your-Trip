import React from 'react';
import { HeaderProps } from '../Typs';

const SearchBar: React.FC<HeaderProps> = ({ item, setItem }) => {
  return (
    <input
      type="text"
      className="h-12 px-2 rounded-lg"
      placeholder="Enter items...!"
      value={item}
      onChange={(e)=> setItem(e.target.value)}
    />
  );
};

export default SearchBar;
