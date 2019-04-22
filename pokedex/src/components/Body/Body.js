import React, { Component } from "react";
import SinglePokemon from "./SinglePokemon";







class Body extends Component {
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.resultsPokemon !== prevProps.resultsPokemon) {

      this.setState(this.state);
      //console.log("The value is ");
      //console.log(this.props.resultsPokemon.resultsPokemon);
    }
  }


  
    
  render() {   
    const  { resultsPokemon }  = this.props.resultsPokemon;
       //console.log(resultsPokemon.length);
        return (
      <div className="container-fluid mt-4">
       <div className="row mt-3">
          {resultsPokemon && resultsPokemon.length >= 0 ?
            resultsPokemon.map((item, index) => {
              return <SinglePokemon 
              key={index} 
              id={item.id}
              name={item.name}
              img={item.urlImg}
              health={item.health}
              attack={item.attack}>
              </SinglePokemon>//<p key={index}>{item.id}</p>//console.log(fetchOnePokemon());//
            })
            : null
          }
        </div>
        </div>
        );
      }
    }
    
    
    
    
    
    export default Body;
    
    
