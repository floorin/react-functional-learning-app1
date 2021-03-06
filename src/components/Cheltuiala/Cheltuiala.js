import React, { useState } from "react";
import "../Cheltuiala/cheltuiala.css";
import { useSelector,useDispatch } from "react-redux";

function Cheltuiala(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const [checked, setChecked] = useState(props.cheltuiala.activ_y_n=='y')
    const handleChangeStatus = () => {
        if(props.cheltuiala.activ_y_n === 'n'){
            props.changeStatus({id:props.cheltuiala.id,new_status:'y'});
        }else{
            props.changeStatus({id:props.cheltuiala.id,new_status:'n'});
        }
       // setChecked(!checked)
    }

    const deleteCheltuiala = ()=>{
        props.deleteCheltuiala(props.indexInList);
    }

    return <div className="cheltuiala__card">
        <h4>componenta "Cheltuiala" (index {props.indexInList})</h4>
        <div className="about__text--big">{props.cheltuiala.id} {props.cheltuiala.den_ro}</div>
        <input onChange={handleChangeStatus} checked={checked} type="checkbox" />
        <div>
            <button onClick={deleteCheltuiala}>Sterge</button>
        </div>
        <h5>the counter in store is :{counter.num}</h5>
    </div>;
}
export default Cheltuiala;
