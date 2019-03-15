import React, { Component } from 'react';
import Singlenew from './Singlenew';


class Allnews extends Component {
    render(){
        return(
            <div className="col-md-6 mb-5">
            {
                this.props.news.map((news,index) => {
                    return index <= 2 ? <Singlenew 
                    key={index}
                    title={news.title}
                    image={news.urlToImage}
                    url={news.url}
                    author={news.author}
                    description={news.description}
                    date={news.publishedAt}/>:false;
                })
            }
            </div>
        );
    }
}

export default Allnews;