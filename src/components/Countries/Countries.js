import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../actions/actions';
import Country from '../Country/Country';
// import { Form } from '../Form/Form';
import styles from './Countries.module.scss'; 

function Countries(){
    const {countries} = useSelector(state => state);
    const dispatch = useDispatch(); 
    React.useEffect(()=>{
        dispatch(getCountries());  
    },[dispatch]);
    // console.log('state.countries', countries);
    if(countries.length > 0){
        return(
            <div className={styles.container}>
                <div className={styles.countries}>
                    {countries.map((country, i) => <Country
                        key={i}
                        id={country.id}
                        continent={country.continent} 
                        name = {country.name}
                        img = {country.img} 
                    />)}
                </div>
            </div>
        );
    }
    else{
        return(
            <div className={styles.container}>
                <div className={styles.countries}>
                    <span className={styles.message}>There are no countries for the search</span>
                </div>
            </div>
        );
    }
}

export default Countries;