import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCountry, deleteLittleCard, getIds } from '../../actions/actions';
import LittleCard from '../LittleCard/LittleCard';
import styles from './CreateActivity.module.scss'; 
// let stado = [];

function CreateActivity() {
    const {countries, ids} = useSelector(state => state.create);
    const dispatch = useDispatch();
    // let { countries, ids } = state.create;
    const [input, setInput] = React.useState({
        name: '',
        duration: '',
        difficulty: '',
        season: '',
        add: '',
        msg : '', 
    });
    React.useEffect(() => {
        dispatch(getIds());
    }, [dispatch]);
    // +++ ojo+++
    const handleInputs = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        })
    }
    const handlerAdd = (e) => {
        e.preventDefault();
        if (!countries.includes(e.target.value) && e.target.value !== ''){
            dispatch(addCountry(e.target.value));
            setInput({
                ...input,
                add: e.target.value
            })
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            name: input.name,
            duration: Number(input.duration),
            difficulty: Number(input.difficulty),
            season: input.season,
            countries
        },
            url = "http://localhost:3001/activity";
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        // console.log(response, 'ppppppp');
        setInput({
            ...input,
            name: '',
            duration: '',
            difficulty: '',
            season: '',
            add: ''
        });
        dispatch(deleteLittleCard('all'));
        if(response.status === 200){
            alert('Activity successfully created');
        }
        else{
            alert('Error creating activity');
        }
    }
    let difficultyValues = ['1', '2', '3', '4', '5'];
    let seasonValues = ['Spring', 'Summer', 'Fall', 'Winter'];
    // datos del componente
    
    return (
        <div className={styles.container}>
            <>
            <NavLink to={`/countries`}>
                <div className={styles.back}>Go Back</div> 
            </NavLink>
            </>
            <span className={styles.title}>Create Activity</span>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                    <span className={styles.span}>
                        <input type="text" name="name" onChange={handleInputs} 
                        value={input.name} placeholder='Enter activity name...' required
                        className={styles.input}/>
                        <label for="name">Name</label>
                    </span>
                    <span className={styles.span}>
                        <input type="text" name="duration" onChange={handleInputs} 
                        value={input.duration} placeholder='Enter activity duration...' required
                        className={styles.input}/>
                        <label for="duration">Duration</label>
                    </span>
                    <span>
                        <select id="difficulty" onChange={handleInputs} name = 'difficulty' 
                        value={input.difficulty} required>
                            <option key='0' value='' disabled>Select difficulty...</option>
                            {difficultyValues.map((val, i) => <option key = {i} value={val}>{val}</option>)}
                        </select>
                        <label>Difficulty</label>
                    </span>
                    {/* duration */}
                    <span>
                        <select id="season" onChange={handleInputs} name = 'season' value={input.season} required>
                            <option key='all' value='' disabled>Select season...</option>
                            {seasonValues.map((val, i) => 
                            <option key = {i} value={val.toLocaleLowerCase()}>{val}</option>
                            )}
                        </select>
                        <label>Season</label>
                    </span>
                    <span>
                        <select id="browsers" onChange={handlerAdd}  name= 'select-country' value={input.add} required
                            className={styles.selectCountries}
                        >
                            <option key='0' value='' disabled>Select country...</option>
                            {ids.map(obj => (<option value={obj.id} id={obj.name} 
                            key={obj.id} >{`(${obj.id}) ${obj.name}`}</option>))}
                        </select>
                        <label>Countries</label>
                    </span>
                    <div key='a' className={styles.countries}>
                        {countries.map((country, i) => (<LittleCard key={i} country={country} />))}
                    </div>
                    <input type="submit" value="Submit" className={styles.submit}/>
                </div>
            </form>
        </div>
    );
}

export default CreateActivity;
