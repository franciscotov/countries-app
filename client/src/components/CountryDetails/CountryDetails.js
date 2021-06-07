import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getDetails } from '../../actions/actions';
import styles from './CountryDetails.module.scss';
import Activity from '../Activity/Activity'



function CountryDetails (){
    const {id} = useParams();
    const {countryDetails} = useSelector(state => state);
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(getDetails(id)); 
    }, [dispatch, id]);
    // console.log(id, 'hola')
    return countryDetails?.name? ( 
        <div className = {styles.container}>
            <NavLink to={`/countries`}>
                <div className={styles.back}>Go Back</div> 
            </NavLink>
            <span className={styles.title}>Country details</span>
            <div className={styles.country}>
                <div className={styles.data}>
                    <img alt= '' src = {countryDetails.img}/>
                    <div className={styles.details}>
                        {Object.keys(countryDetails).map(prop => {
                            console.log(prop)
                            if(prop !== 'activities' && prop !== 'id' && prop!== 'img' 
                            && prop !== 'area' && prop !== 'population') 
                            return <span>{prop.toUpperCase()}: {countryDetails[prop]}</span>
                            if(prop === 'area') return <span>{prop.toUpperCase()}: {countryDetails[prop]} KM2</span>
                            if(prop === 'population') return <span>{prop.toUpperCase()}: {countryDetails[prop]}</span>
                            return ''; 
                        } )}
                    </div>
                </div>
                <span>Activities</span>
                <div className={styles.activities}>
                {
                    countryDetails.activities.map(activity => <Activity 
                        name = {activity.name} difficulty={activity.difficulty}
                        duration= {activity.duration} season={activity.season}
                        /> )
                    }
                </div>
            </div>
            
        </div>
    ) : (<div>No se encontro el pais</div>);
}

export default CountryDetails;