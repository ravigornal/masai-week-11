
const ADD_DETAILS = "ADD_DETAILS"

const addDetails = value =>{
    console.log('xx')
    return{
        type: ADD_DETAILS,
        capital: value.capital,
        continent : value.continent,
        gdp : value.gdp,
        population: value.population
        
    };
};

export default addDetails;