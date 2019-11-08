import React,{Component} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


class Country extends Component{
    state={
        details : []
    }
    componentDidMount(){
        axios.get('https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json')
        .then(res=> {
            console.log(res)
            this.setState({
                details:res.data.slice(0,20)    
            })
        })
    }
    render(){
        return(<ol>
            {this.state.details.map(country =><Link to={`/${country.name}`}><li key={country.name}>{country.name}</li></Link>)}
        </ol>)
    }
}

export default Country;