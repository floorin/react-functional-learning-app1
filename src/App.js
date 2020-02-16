import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import './App.css';
import About from './components/About/About'
import EditMyName from './components/EditMyName/EditMyName'
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
    const counter = useSelector(state => state.counter);
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();

    const [nomCheltuieli, setCheltuieli] = useState([] );
    const [addingNewCheltuiala, setAddingNewCheltuiala] = useState(false);

    useEffect(() => setCheltuieli(startNomCheltuieli), []);

    const [mesajApp,setMesajApp] = useState('');

    const onAddNewCheltuiala=(paramCheltuialaNoua)=>{
        setAddingNewCheltuiala(true);
        const existaDeja=nomCheltuieli.filter(cheltuiala=> cheltuiala.id==paramCheltuialaNoua.id);
        if(existaDeja.length>0){
            setMesajApp('Exista deja acest id, alegeti altul');
            setAddingNewCheltuiala(false);
        }else{
            setMesajApp('');
            setTimeout(function(){ setCheltuieli([...nomCheltuieli,paramCheltuialaNoua]);
                                            setAddingNewCheltuiala(false);
                                            }, 1000);
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
                <h2 style={{color: "blueviolet"}}>Here is the main app, the variable in store has value: {counter.num}, and the user name is {currentUser.lastName} {currentUser.firstName}</h2>
                <button
                    onClick={() =>
                        dispatch({
                            type: "INCREMENT",
                            step: 1
                        })
                    }
                >
                    Increment
                </button>
              <div className="flex2Columns">
                  <About />
                  <EditMyName />
              </div>
              <hr />
              <CheltuialaNoua onAddNewCheltuialaFromChild={onAddNewCheltuiala} addingNewCheltuiala={addingNewCheltuiala} />
              <hr />
                {mesajApp}
              <hr />
              <ListaCheltuieli />
            </div>
  );
}

export default App;
