import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import './about.css';
import styles from './about.module.css';
import currentUser from "../../reducers/username";

function About() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const currentUser =  useSelector(state => state.currentUser);
    const [mesaj, setMesaj] = useState('');
    const [count, setCount] = useState(0);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setMesaj(`Ai dat click de ${counter.num} ori!`);
    });

    const increaseStepInSore= () => {
        dispatch({
            type: "INCREMENT",
            step: 1
        })
    }

return <>
            <div className={styles.card}>
                <h2 className="about__text--big">Hi, I'm the "About" component!</h2>
                <h4 className="about__text--big">{currentUser.lastName} {currentUser.firstName}</h4>
                <h5 className={styles.about}>{mesaj}</h5>
                <button onClick={increaseStepInSore}>Click me!</button>
            </div>
        </>;
}
export default About;
