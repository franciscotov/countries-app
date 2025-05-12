import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteLittleCard } from '../../actions/actions';
import styles from './LittleCard.module.scss'; 


function LittleCard({ key, country}){
    const dispatch = useDispatch();
    return (
        <div className={styles.littleCard}>
            <div className={styles.country} key= {key}>{country}</div>
            <span className={styles.close} onClick={() => dispatch(deleteLittleCard(country))}>X</span>
        </div>
    );
}

export default LittleCard;