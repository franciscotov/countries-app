import React from 'react';
import styles from './Activity.module.scss'; 



export default function CountryDetails ({state, name, difficulty, duration, season}){
    return <div className={styles.container}>
            <div className={styles.activity}>
                {name}
                <span>{difficulty}</span>
                <span>{duration}</span>
                <span>{season}</span>
            </div>
        </div>
}