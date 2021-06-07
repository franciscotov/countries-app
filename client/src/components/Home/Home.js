import { NavLink } from 'react-router-dom';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
function Home(){
    return(
        <div className={styles.home}>
            <NavLink to={`/countries`}>
                <span>
                    Go to Countries
                </span>
                <FontAwesomeIcon icon={faAngleDoubleRight} className={styles.icon} />
            </NavLink>
        </div>
    );
}

export default Home;