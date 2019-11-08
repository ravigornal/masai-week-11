import React from 'react'
import {connect} from 'react-redux'

class Data extends React.Component{
    constructor(props){
        super(props);
        
        console.log();

        // //Assigning Rank for the Country (GDP)
        // let x = details.sort((a,b) => Number(b.Gdp) - Number(a.Gdp))
        // let y = x.map((ele, i) => {
        //     return { ...ele, GdpRank: i+1 }
        // })

        // //Assigning Rank for the Country (Population)
        // let z = y.sort((a,b) => Number(b.Population) - Number(a.Population))
        // console.log(z)
        // let zx = z.map((ele, i) => {
        //     return { ...ele, PopulationRank: i+1 }
        // })
        // console.log(x)
        // this.state = {
        //     element : zx,
        // }
    }
    render(){
        console.log(this.props)

        if(this.state!= null){
            return(
                <div>
                    <table class="table table-dark" style={{marginLeft:"320px",marginTop:"20px",width:"600px"}}>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Country</th>
                                <th>Continent</th>
                                <th>GDP</th>
                                <th>Population</th> 
                                <th>Rank<br></br>(GDP) in %</th>
                                <th>Rank <br></br>(Population) in milllions</th>
                            </tr>
                        </thead>
                        {this.state.map((ele, i) =>{
                        console.log(ele)
                        return(
                            <tbody>
                                <tr>
                                    <td>{i+1000}</td>
                                    <td>{ele.county}</td>
                                    <td>{ele.Continent}</td>
                                    <td>{ele.Gdp}</td>
                                    <td>{ele.Population}</td>
                                    <td>{ele.GdpRank}</td>
                                    <td>{ele.PopulationRank}</td>
                                </tr>
                            </tbody>
                        )
                        })}
                    </table>
                </div>
            )
        }
        else{
            return(
                <div style={{marginTop:"250px", marginLeft:"200px",textAlign:"center"}}>
                    <h1>No Details Found</h1>
                </div>
            )
        }
    }
    

}

const mapStateToProps =(state)=>{
    console.log(state)
    return {
        Continent:state.Continent
    }
    
}
export default connect(mapStateToProps,null) (Data);