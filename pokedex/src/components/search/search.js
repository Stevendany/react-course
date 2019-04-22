import React, { PureComponent } from 'react';
import './options.css';
import optSCSS from './options.scss';
//{options == null ? optSCSS.gone : optSCSS.options}

class Search extends PureComponent {
  render() {
    const { options, fetchOnePokemon } = this.props;
    let x = 0;
    //console.log(options.length);
    if (options && options.length > 0) {
      return (

        <div className="options">
          <ul>{
            options.map((item, index) => {
              if(index <= 3){
                return <li key={index}><a href="#" onClick={() => { fetchOnePokemon(item.url) }}>{item.name}</a></li>
              }
            })
          }
          </ul>
        </div>
      )
    } else {
      return (
        <div className="options">
          <p>No Results:</p>
        </div>
      );
    }

  }
}

export default Search;
