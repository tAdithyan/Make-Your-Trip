import React from 'react';
import SearchBar from './SearchBar';
import Button from './Button';
import palm from '../palm.png';
import { HeaderProps } from '../Typs';

const   Header: React.FC<HeaderProps> = ({ setItem, handleBtnPress, taken }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 p-10 bg-red-300 h-fit">
        <img src={palm} alt="Palm" height={400} width={100} />
        <SearchBar setItem={setItem} />
        <Button style={'bg-red-400'} buttonPress={handleBtnPress}>
          Add
        </Button>
        <img src={palm} alt="Palm" height={400} width={100} />
        {taken?.length!==0 &&

        <div className="flex flex-col items-center justify-center gap-2 p-10 overflow-y-scroll bg-red-100 h-[300px]">
         <h1 className="text-2xl">Completed</h1>
          {taken?.map((item, index) => (
            <div
              key={index}
              className="flex flex-row px-10 bg-red-100 border-2 border-red-800 boder h-fit w-fit"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
}
      </div>
    </div>
  );
};

export default Header;
