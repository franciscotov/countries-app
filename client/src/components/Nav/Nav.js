 import React from 'react';
 import styles from './Nav.module.scss';
 import { TiSocialLinkedin} from 'react-icons/ti';
 import { FaGithub} from 'react-icons/fa';

 export default function Nav(){
     return(
         <div className={styles.container}>
            <div className={styles.left}>By Franciscotov</div>
            <div>Countries App</div>
            <div className={styles.right}>
                <a href='https://www.linkedin.com/in/franciscotov/' target='_blank' rel="noreferrer"> 
                    <TiSocialLinkedin className={styles.icon}/>
                </a>
                <a href='https://github.com/franciscotov/FT10-PI-Countries' target='_blank' rel="noreferrer"> 
                    <FaGithub className={styles.icon}/>
                </a>
            </div>
         </div>
     );
 }