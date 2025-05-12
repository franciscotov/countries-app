export const GET_FIRSTS_COUNTRIES = 'GET_FIRSTS_COUNTRIES';
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME';
export const GET_PAGE = 'GET_PAGE';
export const GET_DETAILS = 'GET_DETAILS';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const ADD_COUNTRY = 'ADD_COUNTRY';
export const DELETE_LITTLE_CARD = 'DELETE_LITTLE_CARD';
export const GET_IDS = 'GET_IDS';
export const PAGE = 'PAGE';
export const FILTER_BY_CONTINENT= 'FILTER_BY_CONTINENT';
export const FILTER_BY_ACTIVITY= 'FILTER_BY_ACTIVITY';
export const ORDER_BY_NAME_POPULATION  = 'ORDER_BY_NAME_POPULATION';
export const ORDER_ASC_DESC='ORDER_ASC_DESC';


export const filterByActivity = (order) => {
    return {type: FILTER_BY_ACTIVITY, payload:order};
}

export const orderAscDesc = (test) => {
    return {type: ORDER_ASC_DESC, payload: test};
}

export const orderByNameOrPopulation = (order) => {
    console.log(order, 'ttttt')
    return {type: ORDER_BY_NAME_POPULATION, payload: order};
}

export const filterByContinent = (continent) => {
    return {type: FILTER_BY_CONTINENT, payload: continent}
}

export const deleteLittleCard = (country) => {
    return { type: DELETE_LITTLE_CARD, payload: country };
}

export const addCountry = (country) => {
    return { type: ADD_COUNTRY, payload: country };
}

export const inputsActions = (target) => {
    return { type: INPUT_CHANGE, payload: target };
}

export function getIds() {
    return function(dispatch) {
        return fetch(`${process.env.REACT_APP_URLAPI}/countries/all`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_IDS, payload: json });
        });
    };
}

export function getDetails(id) {
    // console.log(id)
    return function(dispatch) {
        return fetch(`${process.env.REACT_APP_URLAPI}/countries/${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_DETAILS, payload: json });
        });
    };
}

export function page(name, offset) {
    // console.log('ttttttttttttttttttttt', name, offset)
    return function(dispatch) {
        return fetch(`${process.env.REACT_APP_URLAPI}/countries?name=${name}&offset=${offset}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: PAGE, payload: {offset, json} });
        });
    };
}

export function getPage(offset) {
    return function(dispatch) {
        return fetch(`${process.env.REACT_APP_URLAPI}/countries?offset=${offset}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_PAGE, payload: json });
        });
    };
}

export function getCountryByName(name, offset) {
    console.log(name, 'tttttttttt')
    return function(dispatch) {
        return fetch(`${process.env.REACT_APP_URLAPI}/countries?name=${name}&offset=${offset}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_COUNTRY_BY_NAME, payload: {json, name} });
        });
    };
}

// action asincrona para obtener paises desde la api
export function getCountries() {
    return function(dispatch) {
        return fetch(`${process.env.REACT_APP_URLAPI}/countries`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_FIRSTS_COUNTRIES, payload: json });
        });
    };
}