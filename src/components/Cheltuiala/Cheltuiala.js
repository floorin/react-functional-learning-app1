import React, { useState } from "react";
import "../Cheltuiala/cheltuiala.css";


function Cheltuiala(props) {
    const [checked, setChecked] = useState(props.cheltuiala.activ_y_n=='y')
    const handleChangeStatus = () => setChecked(!checked)

    console.log('in Cheltuiala avem props=%o',props)
    return <div className="cheltuiala__card">
        <div className="about__text--big">{props.cheltuiala.id} {props.cheltuiala.den_ro}</div>
        <input onChange={handleChangeStatus} checked={checked} type="checkbox" />
    </div>;
}
export default Cheltuiala;
