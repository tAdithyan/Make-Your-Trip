import React, { useState } from 'react';
import './App.css';
import './index.css';
import Navbar from './componetns/Navbar';
import List from './componetns/List';
import Header from './componetns/Header';
const App: React.FC = () => {
  const [item, setItem] = useState<string>('');
  const [newItem, setNewItem] = useState<string[]>([]);
  const [take, settake] = useState<string[]>([]);

  const handleBtnPress = () => {
    if (item.length !== 0) {
      setNewItem(newItem => [...newItem, item]);
    } else {
      alert('enter items');
    }
  };
  const handleDltButtonPress = (item: string, Deleteindex: number) => {
    let openion = confirm(`are you sure you want to delete ${item} ...?`);
    if (openion == true) {
      let newvalues = newItem.filter((item, index) => {
        return index !== Deleteindex;
      });

      if (newvalues) {
        setNewItem(newvalues);
      }
    }
  };
  const handleComleted = (tem: string, Deleteindex: number) =>{
    let delvalues = newItem.filter((item, index) => {
      return index === Deleteindex;
    });
        settake(take => [...take, delvalues]);
        let newvalues = newItem.filter((item, index) => {
          return index !== Deleteindex;
        });
        if (newvalues) {
          setNewItem(newvalues);
        }

  }

  return (
    <div className="flex flex-col h-screen bg-red-100">
      <Navbar />
      <Header setItem={setItem} item={item} handleBtnPress={handleBtnPress} taken={take} />
      <List newitem={newItem} handleDltButtonPress={handleDltButtonPress} handleComleted={handleComleted} />
    </div>
  );
};

export default App;
