import React, { useState, useEffect } from 'react';
import './about.css';
import styles from './WillBeImportedAsStyle.css';

function About() {
    const [mesaj, setMesaj] = useState('');
    const [count, setCount] = useState(0);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        setMesaj(`Ai dat click de ${count} ori!`);
    });

    return <>
        <h2 className="about__text--big">Hi, I'm the "About" component!</h2>
        <h5 className={styles.about}>{mesaj}</h5>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
    </>;
}
export default About;
