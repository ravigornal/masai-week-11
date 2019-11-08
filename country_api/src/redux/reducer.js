const ADD_DETAILS = "ADD_DETAILS"
let retrieveData = localStorage.getItem("Details");
console.log(retrieveData)
let details = JSON.parse(retrieveData)

if(details != null){
    var init = details
}else{

}

const reducer = (state=init,action) => {
    console.log('redux is called')
    switch(action.type){
        case ADD_DETAILS:
            console.log('add details is running')
            let tempStorage ={
                capital: action.capital,
                continent : action.continent,
                gdp : action.gdp,
                population: action.population
            }
            localStorage.setItem('Details',JSON.stringify( tempStorage))
            return tempStorage
        default:
            return state;

    }
}

export default reducer;