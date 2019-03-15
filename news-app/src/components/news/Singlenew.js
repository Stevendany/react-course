import React, { Component } from 'react';


class Singlenew extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        }

    render(){
        const {title,image,url,author,description,date} = this.props;
        return(            
                <div className="card w-80 mb-2 shadow-sm">
                <div className="card-body">
                  <img className="card-img-top" src={image}/>   
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="small">by {author == null ? "Anonymous" : author}</p>
                  <p class="card-text"><small class="text-muted">{date}</small></p>
                  <a href={url} className="btn btn-primary">Read more</a>
                </div>
              </div>                        
        );
    }
}

export default Singlenew;