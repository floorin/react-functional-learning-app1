import React, { useState } from 'react';
import './cheltuialanoua.css';

function CheltuialaNoua(props) {
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

   const adaugaCheltuiala = () => {
       if(cheltuiala.id.length==0){
           alert('completeaza id');
       }else{
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
            <button className="btn" onClick={adaugaCheltuiala}>Adauga cheltuiala in lista</button>
        </div>
    </>;
}
export default CheltuialaNoua;
