import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { page } from '../../actions/actions';
import { IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import styles from './Pages.module.scss';

function Pages(){
    const {numPages, search, countries} = useSelector(state => state);
    const dispatch = useDispatch();
    // useEffect
    const handlePage = (e) => {
        e.preventDefault();
        // obtenemos las paginas de 10 en 10, según si estamos en criterio de busqueda por searchbar o por paginado
        // console.log(state.numPages <= 240, state.numPages)
        if(e.target.id === 'next' && numPages < 240){
            // solo pasaremos a la siguiente pag si hay al menos 10 paises ó cuando no estamos bajo
            // algun criterio de busqueda, en cuyo caso queremos paginar de manera 'libre'
            if(countries.length === 10 || !search.s){
                if(search.s) {
                    dispatch(page(search.name, numPages + 10));  
                }
                else {
                    dispatch(page(undefined, numPages + 10));
                }
            }
        }
        else if(e.target.id === 'prev' && numPages > 0){
            if(search.s) dispatch(page(search.name, numPages - 10));
            else dispatch(page(undefined, numPages - 10));
        }
    }
    return(
        <div className={styles.pages}>
            <div  className={numPages === 0 ? styles.arrowLeftDisable:styles.arrowLeft } 
            id='prev' onClick={handlePage}>
                {/* <FontAwesomeIcon icon={faChevronLeft}  id='prev' size ='5x' /> */} 
                <span className={styles.text} id='prev' onClick={handlePage}><IoIosArrowBack 
                className={styles.icon} onClick={handlePage}
                /></span>
                
            </div>
            <div id= 'next' onClick={handlePage} className={numPages === 240 ? styles.arrowRightDisable:styles.arrowRight} >
                {/* <FontAwesomeIcon icon={faChevronRight} className={styles.icon} id= 'next' size ='5x'/> */}
                <span className={styles.text} id= 'next' onClick={handlePage}><IoIosArrowForward 
                className={styles.icon}
                /></span>
            </div>
        </div>
    );
}

export default Pages;