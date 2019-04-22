import React, { PureComponent } from 'react';
import Search from '../search/search';
/**
 * PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you. 
 * When props or state changes, PureComponent will do a shallow comparison on both props and state. 
 * Component on the other hand won’t compare current props and state to next out of the box. 
 * Thus, the component will re-render by default whenever shouldComponentUpdate is called.
 */



class Header extends PureComponent{
    constructor(){
        super();
        this.state = {
            search: null
        };
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0,20)});
    }

    render(){
        const {pokemons , fetchOnePokemon, getResult} = this.props;
        let options = pokemons.filter(
            (pokemon) => {
                return pokemon.name.indexOf(this.state.search == "" ? "%":this.state.search) !== -1;
            }                        
        );  
        //console.log(options);      
        return(
            <div className="row text-center justify-content-md-center">        
                <div className="input-group col-md-8 col- mt-2 p-2 rounded">
                    <input id="search" className="form-control" type="text" placeholder="Type a pokemon name" onChange={this.updateSearch.bind(this)}/>
                    <Search options={options} fetchOnePokemon={fetchOnePokemon}></Search>                       
                    <div className="input-group-prepend">
                        <button id="pick" className="btn btn-success rounded" onClick={() => {getResult(options)}}>I choose you!</button>
                    </div>
                </div>            
            </div>  
        )
    }
}

export default Header;