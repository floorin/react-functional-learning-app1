import React, { useState, useEffect } from 'react';
import './cheltuialanoua.css';

function CheltuialaNoua(props) {
    const [mesajButton,setMesajButton] = useState('Adauga cheltuiala in lista');

    const [cheltuiala, setCheltuiala] = useState(
        {
            id:1,
            den_ro:'xx',
            activ_y_n:'n'
        }
    );

    const updateCheltuiala = e => {
        setCheltuiala({
            ...cheltuiala,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
            if (props.addingNewCheltuiala) {
                setMesajButton('..working...please wait...');
            } else {
                setMesajButton('Adauga cheltuiala in lista');
            }
        }
        , [props.addingNewCheltuiala]);

   const adaugaCheltuiala = () => {
       if(cheltuiala.id.length==0){
           alert('completeaza id');
       }else{
           setMesajButton('...working...please wait....');
           props.onAddNewCheltuialaFromChild(cheltuiala);
           setCheltuiala({id:'',den_ro:'',activ_y_n:'n'});
       }
    }

    return <>
        <div className="form__cheltuiala__noua">
            <h4>I'm another component: "CheltuialaNoua"</h4>
        <label>
            Id cheltuiala:<input type="text" name="id" value={cheltuiala.id} onChange={updateCheltuiala} />
        </label>
        <label>
            Denumire cheltuiala:<input type="text" name="den_ro" value={cheltuiala.den_ro} onChange={updateCheltuiala} />
        </label>
            {!props.addingNewCheltuiala?
            <button className="btn" onClick={adaugaCheltuiala}>{mesajButton}</button>
                :<span>{mesajButton}</span>}
        </div>
    </>;
}
export default CheltuialaNoua;
