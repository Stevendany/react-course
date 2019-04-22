import React, { Component } from 'react';



class SinglePokemon extends Component {

    render() {
        const { name,attack,health,img,id } = this.props;
        return (
            <div className="card mb-3 col-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={img} className="card-img" alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <ul className="card-text">
                                <li>Attack: {attack}</li>
                                <li>Healt: {health}</li>
                            </ul>
                            <p className="card-text"><small className="text-muted">Pokemon ID: {id}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default SinglePokemon;