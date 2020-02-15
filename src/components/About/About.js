import React from 'react';
import './about.css';
import styles from './WillBeImportedAsStyle.css';

function About() {
    return <>
        <h2 className="about__text--big">Hi, I'm the "About" component!</h2>
        <h5 className={styles.about}>Nothing special here</h5>
    </>;
}
export default About;
