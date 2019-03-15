import React, { Component } from 'react';
import Clock from 'react-live-clock';
import Allnews from './Allnews.js';
import './gridNews.css';

   


class Gridnews extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            ABCnews: [],
            Yorknews: [],
            Lastweek:[],
            Lastmonth:[],
            Allpost: []             
        }        
      }
    Backtime(days){
      let  milisegundos=parseInt(35*24*60*60*1000);

      let fecha=new Date();
  
      let Cday=fecha.getDate();
  
      // el mes es devuelto entre 0 y 11
  
      let Cmonth =fecha.getMonth()+1;
  
      let Cyear =fecha.getFullYear();      
  
   
  
      //Obtenemos los milisegundos desde media noche del 1/1/1970
  
      let tiempo=fecha.getTime();
  
      //Calculamos los milisegundos sobre la fecha que hay que sumar o restar...
  
      milisegundos=parseInt(days*24*60*60*1000);
  
      //Modificamos la fecha actual
  
      let total=fecha.setTime(tiempo+milisegundos);
  
      let Lday=fecha.getDate();
  
      let Lmonth=fecha.getMonth()+1;
  
      let Lyear=fecha.getFullYear();

      return [[Lday,Lmonth,Lyear],[Cday,Cmonth,Cyear]];
    } 




      componentWillMount() {
        // JSON for the news from The New York Times
        fetch('https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apikey=b85abaa920364232afc7dfa3ac8bb3fa')
          .then((response) => {
            return response.json()
          })
          .then((news) => {
            this.setState({ Yorknews: news.articles })
          })
          // JSON for the news ABC News
          fetch('https://newsapi.org/v2/top-headlines?sources=abc-news&apikey=b85abaa920364232afc7dfa3ac8bb3fa')
          .then((response) => {
            return response.json()
          })
          .then((news) => {
            this.setState({ ABCnews: news.articles })
          })
          // JSON for the news from the last week          
          let last = this.Backtime(-7);          
          let lastWeek = last[0][2]+'-'+last[0][1]+'-'+last[0][0];
          let currenDate = last[1][2]+'-'+last[1][1]+'-'+last[1][0];
          let weekUrl = 'https://newsapi.org/v2/everything?q=apple&from='+lastWeek+'&to='+currenDate+'&apikey=b85abaa920364232afc7dfa3ac8bb3fa';
          console.log(weekUrl);
          fetch(weekUrl)
          .then((response) => {
            return response.json()
          })
          .then((news) => {
            this.setState({ Lastweek: news.articles })
          })
           // JSON for the news from the last month          
           last = this.Backtime(-27);          
           lastWeek = last[0][2]+'-'+last[0][1]+'-'+last[0][0];
           currenDate = last[1][2]+'-'+last[1][1]+'-'+last[1][0];
           weekUrl = 'https://newsapi.org/v2/everything?q=apple&from='+lastWeek+'&to='+currenDate+'&apikey=b85abaa920364232afc7dfa3ac8bb3fa';
           console.log(weekUrl);
           fetch(weekUrl)
           .then((response) => {
             return response.json()
           })
           .then((news) => {
             this.setState({ Lastmonth: news.articles })
           })
           // JSON for the news from the last month          
           last = this.Backtime(-27);          
           lastWeek = last[0][2]+'-'+last[0][1]+'-'+last[0][0];
           currenDate = last[1][2]+'-'+last[1][1]+'-'+last[1][0];
           weekUrl = 'https://newsapi.org/v2/everything?q=apple&from='+lastWeek+'&to='+currenDate+'&apikey=b85abaa920364232afc7dfa3ac8bb3fa';
           console.log(weekUrl);
           fetch(weekUrl)
           .then((response) => {
             return response.json()
           })
           .then((news) => {
             this.setState({ Lastmonth: news.articles })
           })
           
          // JSON for the news from The New York Times
        fetch('https://newsapi.org/v2/everything?domains=abcnews.go.com,nytimes.com&apiKey=b85abaa920364232afc7dfa3ac8bb3fa')
        .then((response) => {
          return response.json()
        })
        .then((news) => {
          this.setState({ Allpost: news.totalResults })
        })
           
      }
        render(){
            const {Yorknews,ABCnews,Lastweek,Lastmonth,Allpost} = this.state;               
          if (Yorknews.length > 0) {
            return (<div className="container pt-2">
            <div className="row gridNews">
                  <div className="col-md-12 text-center m-2 dateDay">
                       <Clock format={'MMMM Mo YYYY'} ticking={true} timezone={'US/Pacific'} />                       
                  </div>                               
                <h3 className="col-md-6 lead">The New York Times</h3> 
                <h3 className="col-md-6 lead">ABC News</h3>                  
                <Allnews news={Yorknews} /> 
                <Allnews news={ABCnews} />
                <h3 className="col-md-6 lead">Last Week</h3> 
                <h3 className="col-md-6 lead">Last Month</h3>  
                <Allnews news={Lastweek} /> 
                <Allnews news={Lastmonth}/>  

                <p className="col-md-12 text-secondary">Total News at the moment: {Allpost} posts</p>                                                                                       
              </div>
              </div>
            )
          } else {
            return( 
                <div className="container pt-2">
              <div className="row gridNews">
                    <div className="col-md-12 text-center m-2">
                         <Clock format={'MMMM Mo YYYY'} ticking={true} timezone={'US/Pacific'} /> 
                    </div>
                <p className="text-center">Loading News...</p>
                </div>
                </div>
                );
          }
        }
    }

export default Gridnews;
