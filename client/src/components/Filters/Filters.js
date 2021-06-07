import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivity, filterByContinent, orderAscDesc, orderByNameOrPopulation } from '../../actions/actions';
import styles from './Filters.module.scss'

function Filters(){
    const {countriesPrev, orders} = useSelector(state => state); 
    const dispatch = useDispatch();
    
    const handlerFilters = (e) => {
        // console.log(e.target.value , 'yaysyas');
        dispatch(filterByContinent(e.target.value));
    }
    const handlerActivities = (e) => {
        dispatch(filterByActivity(e.target.value));
    }
    const handlerOrder = (e) => {
        if(e.target.name === 'by') {
            // console.log('by', e.target.value)
            dispatch(orderByNameOrPopulation(e.target.value)); 
        }
        else {
            dispatch(orderAscDesc(e.target.value));
        }
    }
    const getActivities = (copyCountries) => {
        let arr = [];
        copyCountries.forEach(country => {
            // destructuramos sobre el objeto country y extraemos los objetos actividades
            let {activities: arr1} = country;
            arr = [...arr, ...arr1];
        });
        // devolvemos solo los nombres y ids de las actividades
        return [...arr.map(activity => ({id: activity.id, name: activity.name}))
            .filter((activity, i, arr) => {
                // return activity
                return arr.map(a => a.name).indexOf(activity.name) === i;
            })];
    }
    let activities = getActivities([...countriesPrev]),
    continentValues = ['Americas', 'Africa', 'Asia', 'Europe', 'Oceania', 'Polar'];
    
    return (
        <div className={styles.filters}>
            <div className={styles.principal}>
                <span>
                    <select id = 'continent' name= 'cont-turist' 
                    onChange={handlerFilters} >
                        <option value='' >Select a filter...</option>
                        {continentValues.map((val, i) => 
                            <option value={val} key= {i}>{val}</option> 
                            )}
                    </select>
                    <label>Continent</label>
                </span>
                <span>
                    <select id = 'activity' name= 'activity' onChange={handlerActivities}>
                        <option value='' >Select a activity...</option>
                        {/* mapeamos las actividades disponibles que vienen de una propiedad de redux */}
                        {activities.map(activity => <option value={activity.name} key={activity.id}>{activity.name}</option> )}
                    </select>
                    <label >Activity</label>
                </span>
            </div>
            <div className={styles.secondary}>
                <span>
                    <select id = 'by' name= 'by' onChange={handlerOrder}  >
                        <option value = '' >Select a order...</option>
                        <option value = 'name'>By Name</option>
                        <option value = 'population'>By Population</option>
                    </select>
                    <label >Order</label>
                </span>
                
                <div className={orders.by !== '' ?  styles.enable: styles.disable}>
                    <span>
                        <select id = 'test' name= 'test' onChange={handlerOrder} >
                            <option value = '' >Select a test...</option>
                            <option value = 'ASC'>asceding order</option>
                            <option value = 'DESC'>descendenting order</option>
                        </select>
                        <label>ASC/DESC</label>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Filters;