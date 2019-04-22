import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions/index.js";

import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';

import poke from '../assets/homePoke.gif';
import { FaUserCircle } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';


const Banner = () => {
  return(
      <div className="row justify-content-md-center">
              <img src={poke} alt="poke"/>         
      </div>
  )
}





class Home extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  render() {
    const {pokemons,  fetchOnePokemon, resultsPokemon, getResult} = this.props;
    return (
      <Fragment>
      <div className="fluid-container">
      <div className="row">
         <div className="col-2">
           <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
             <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><FaSearch/> Search</a>
             <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><FaUserCircle/> Trainer Profile</a>             
           </div>
         </div>
         <div className="col-10">
           <div className="tab-content" id="v-pills-tabContent">
             <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <Banner></Banner>
                <Header pokemons={pokemons} fetchOnePokemon={fetchOnePokemon} getResult={getResult}></Header>
                <Body resultsPokemon={resultsPokemon}></Body>
             </div>
             <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <Banner></Banner>
             </div>             
           </div>
         </div>
      </div>     
      </div>      
    </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons.pokemons,
    resultsPokemon: state.resultsPokemon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons: () => {
      dispatch(actions.fetchPokemons());
    },
    fetchOnePokemon: (resultsPokemon) => {
      dispatch(actions.fetchOnePokemon(resultsPokemon));
    },
    getResult: (options) => {
      dispatch(actions.getResult(options));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);



/*

 <Body 
        //pokemons={pokemons} 
        //singlePokemon={singlePokemon} 
        //fetchOnePokemon={fetchOnePokemon()}
      //  >
      </Body>  

*/