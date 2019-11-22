import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom';

class Navigation extends Component {

    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  // componentDidMount() {
  //   this.loadData()
  //   setInterval(this.loadData, 5000);
  // }
   async componentDidMount() {
          try {
            setInterval(async () => {

                console.log("reloading");
              const res = await fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=af72b0fa1ba0430dbd4d8cd8519c4b02');
              const newsapi = await res.json();
              const articles = newsapi.articles;

              this.setState({
                isLoaded: true,
                items: articles
              })
            }, 5000);
          } catch(e) {
            console.log(e);
          }
    }
    
 render() {

    const { error, isLoaded, items } = this.state;
        if (error) {
          return <nav><div>Error: {error.message}</div></nav>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <nav>
             <div>
             <Link exact to="/"><center><h2>Homepage</h2></center></Link>
             </div>
             <div>
             <h2><center>Top Headlines</center></h2>
             </div>
            <ul>
              {items.map((item, key) => (

                <li key={key}>
                  <p>Title: {item.title}</p> <p>Description: {item.description}</p> <p><a href={item.url}>Click to read full story...  </a></p>
                </li>
              ))}
            </ul>
            </nav>
          );
      }

    
    
  }
}

export default Navigation ;