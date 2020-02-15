import React, { useState } from 'react';
import './App.css';
import About from './components/About/About'
import Cheltuiala from './components/Cheltuiala/Cheltuiala'
import CheltuialaNoua from "./components/CheltuialaNoua/CheltuialaNoua";


function App() {

    const [nomCheltuieli, setCheltuieli] = useState(
        [
            {
                id:100,
                den_ro:'Cheltuiala 1',
                activ_y_n:'y'
            },
            {
                id:200,
                den_ro:'Cheltuiala 2',
                activ_y_n:'y'
            },
            {
                id:300,
                den_ro:'Cheltuiala 3',
                activ_y_n:'n'
            }

        ]
    );

    const onAddNewCheltuiala=(paramCheltuialaNoua)=>{
        setCheltuieli([...nomCheltuieli,paramCheltuialaNoua])
    }

    const ListaCheltuieli = () => (
        <div className="ListaCheltuieli">
            {nomCheltuieli.map(function(item) {
                return <Cheltuiala key={item.id} cheltuiala={item} />;
            })}
        </div>
    );

  return (
    <div className="App">
      <About />
      <hr />
      <CheltuialaNoua onAddNewCheltuialaFromChild={onAddNewCheltuiala} />
      <hr />
      <ListaCheltuieli />
    </div>
  );
}

export default App;
