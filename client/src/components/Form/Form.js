import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountryByName } from '../../actions/actions';
import styles from './Form.module.scss';

function Form(){
    const dispatch = useDispatch();
    const [input, setInput] = React.useState({
        value: ''
    });
    const handleChange = (event) => {
        setInput({value: event.target.value});
        dispatch(getCountryByName(event.target.value, 0));
    }
    
    const handleSubmit = (event) => {
        // alert('A name was submitted: ' + input.value);
        event.preventDefault();
        setInput({value:''});
        dispatch(getCountryByName('', 0));
    }    
    return(
        <div className = {styles.container}>  
            <form onSubmit={handleSubmit}>
                <span>
                    <input type="text" value={input.value} onChange={handleChange} className={styles.input}
                    placeholder='Enter Country Name...'/>
                    <label>Country name </label>
                </span>
                <input type="submit" value="Erase" className={styles.submit} />
            </form>
            <NavLink to={`/createactivity`}>
                <div className={styles.activity}>CreateActivity</div>
            </NavLink>
        </div>
    )
}

export default Form;