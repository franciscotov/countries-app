import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Country.module.scss'; 



export default function Country ({continent, name, img, id}){
    return(
        <div className = {styles.country}> 
            <div className={styles.img}>
                <img src = {img} alt=''/>
            </div>
            <div className={styles.data}>
                <span>{name}</span>
                <span> ({continent})</span>
                <NavLink to={`/countries/${id}`}>
                    <div className={styles.buttonDetails}>Details</div> 
                </NavLink>
            </div>
        </div>
    );
}