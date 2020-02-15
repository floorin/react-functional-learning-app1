import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About/About'
import Cheltuiala from './components/Cheltuiala/Cheltuiala'
import CheltuialaNoua from "./components/CheltuialaNoua/CheltuialaNoua";

const startNomCheltuieli=[
    {
        id:100,
        den_ro:'Cheltuiala 1',
        activ_y_n:'y'
    },
    {
        id:200,
        den_ro:'Cheltuiala 2',
        activ_y_n:'y'
    }
]

function App() {

    const [nomCheltuieli, setCheltuieli] = useState([] );
    useEffect(() => setCheltuieli(startNomCheltuieli), []);

    const [mesajApp,setMesajApp] = useState('');

    const onAddNewCheltuiala=(paramCheltuialaNoua)=>{
        console.log('onAddNewCheltuiala paramCheltuialaNoua=%o',paramCheltuialaNoua)
        const existaDeja=nomCheltuieli.filter(cheltuiala=> cheltuiala.id==paramCheltuialaNoua.id);
        if(existaDeja.length>0){
            setMesajApp('Exista deja acest id, alegeti altul');
        }else{
            setCheltuieli([...nomCheltuieli,paramCheltuialaNoua]);
            setMesajApp('');
        }
    }

    const onChangeStatus=(paramOnChangeStatus)=>{
        const cloneNomCheltuieli = [...nomCheltuieli];
        cloneNomCheltuieli.forEach((cheltuiala,pindex)=>{
            if(cheltuiala.id==paramOnChangeStatus.id){
                cloneNomCheltuieli[pindex].activ_y_n=paramOnChangeStatus.new_status
            }
        });
        setCheltuieli(cloneNomCheltuieli);
    }

    const onDeleteCheltuiala=(indexForDeleting)=> {
        const cloneNomCheltuieli = [...nomCheltuieli];
        cloneNomCheltuieli.splice(indexForDeleting,1);
        setCheltuieli(cloneNomCheltuieli);
    }

    const ListaCheltuieli = () => (
        <div className="ListaCheltuieli">
            {nomCheltuieli.map(function(item,pindexCheltuiala) {
                return <Cheltuiala key={item.id} cheltuiala={item} indexInList={pindexCheltuiala} changeStatus={onChangeStatus} deleteCheltuiala={onDeleteCheltuiala}/>;
            })}
        </div>
    );

  return (
    <div className="App">
      <About />
      <hr />
      <CheltuialaNoua onAddNewCheltuialaFromChild={onAddNewCheltuiala} />
      <hr />
        {mesajApp}
      <hr />
      <ListaCheltuieli />
    </div>
  );
}

export default App;
