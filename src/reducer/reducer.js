import { ADD_COUNTRY, DELETE_LITTLE_CARD, FILTER_BY_ACTIVITY, FILTER_BY_CONTINENT, 
    GET_COUNTRY_BY_NAME, GET_DETAILS, GET_FIRSTS_COUNTRIES, GET_IDS, GET_PAGE, ORDER_ASC_DESC, 
    ORDER_BY_NAME_POPULATION, PAGE } from '../actions/actions';

const initialState = {
    countries: [],
    countriesPrev: [],
    orders : {by:'', test :''},
    numPages: 0,
    search: {name: '', s: false},
    countryDetails: {},
    create: {countries:[], ids:[]},
    activity: '',
    continent: ''
};
// [1,2,3,4,5,6,7]

const filterCountries = (filter, copyState) => {
    return filter !== '' ? [...copyState.countriesPrev.filter(count => count.continent === filter)]: 
    [...copyState.countriesPrev];
}

const filterActivities = (filter, copyState) => {
    return filter !== '' ? [...copyState.countriesPrev.filter(count => {
        return count.activities.map(act => act.name).includes(filter)
    })]: 
    [...copyState.countriesPrev];
}

const orderCountries = (test, copyState) => {
    return copyState.orders.by === 'name' ?
    [...copyState.countries.sort((a,b) => test === 'ASC' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))]:
    [...copyState.countries.sort((a,b) => test === 'ASC' ? a.population - b.population : b.population - a.population)];
}

const rootReducer = (state = initialState, action) =>{
    let c = null;
    switch(action.type) {
        case GET_FIRSTS_COUNTRIES :
            return {...state, countries: action.payload, countriesPrev: action.payload, activities: []};
        case GET_COUNTRY_BY_NAME:
            return !action.payload.name? 
            {...state, search: {...state.search, s: false}, numPages:0}:
            {...state, countries: [...action.payload.json], countriesPrev:[...action.payload.json], 
            search: {name: action.payload.name, s:true}, numPages:0};
        case GET_PAGE :
            return {...state, countries: action.payload};
        case PAGE :
            // filtramos los paises en caso de que al cambiar de pagina esté habilitado alguno de los filtros
            c = filterCountries(state.continent, {...state, countriesPrev: [...action.payload.json]});
            return action.payload.json.length > 0 ? 
            {...state, countries: state.continent !== '' ? c:action.payload.json, 
            countriesPrev: [...action.payload.json], 
            numPages: action.payload.offset} : 
            {...state};
        case ORDER_ASC_DESC:
            c = action.payload !== '' ?  orderCountries(action.payload, {...state}): [...state.countriesPrev];
            console.log(state.countriesPrev)
            return action.payload !== '' ? 
            {...state, countries: c, orders: {...state.orders, test: action.payload}}:
            {...state, countries: [...state.countriesPrev], orders: {...state.orders, test: action.payload}};
        case ORDER_BY_NAME_POPULATION:
            c = state.orders.test !== ''? 
            orderCountries(state.orders.test, {...state, orders: {...state.orders, by: action.payload}} ): 
            [...state.countriesPrev];
            return {...state, countries: c, 
            orders: {...state.orders, by: action.payload}};
        case FILTER_BY_ACTIVITY:
            c = filterActivities(action.payload, {...state});
            return {...state, countries: c, activity: action.payload};
        case FILTER_BY_CONTINENT:
            c = filterCountries(action.payload, {...state});
            return {...state, countries: c, continent: action.payload};
        case GET_DETAILS:
            return {...state, countryDetails: action.payload};
        case GET_IDS:
            return {...state, create: {...state.create, ids: action.payload}};
        case ADD_COUNTRY :
            return {...state, create: {...state.create, countries: [...state.create.countries, action.payload]}}
        case DELETE_LITTLE_CARD :
            return action.payload === 'all' ? 
            {...state, 
                create:{...state.create, 
                countries:[]
                }
            }:
            {...state, 
                create:{...state.create, 
                countries:[...state.create.countries.filter(country => country !== action.payload)]
                }
            }
        default:
            return state;
    }
}

export default rootReducer;