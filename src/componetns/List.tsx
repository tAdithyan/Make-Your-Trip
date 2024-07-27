import React from 'react';
import { GiCrossMark } from 'react-icons/gi';
import Button from './Button';
import { ListProps } from '../Typs';
import { TiTick } from 'react-icons/ti';

const List: React.FC<ListProps> = ({ newitem, handleDltButtonPress, handleComleted }) => {
  return (
    <div className="grid h-screen grid-cols-5 gap-4 p-32 ">
      {newitem.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-center gap-2 bg-red-100 border border-red-500 h-fit rounded-xl"
        >
          <p>{item}</p>

          <Button buttonPress={() => handleDltButtonPress(item, index)}>
            <GiCrossMark className="text-red-500" />
          </Button>
          <Button buttonPress={() => handleComleted(item, index)}>
            <TiTick className="text-2xl text-green-500" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default List;
