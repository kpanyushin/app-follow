import React, { Component } from 'react';
// import iPhone from './utils/iPhone.js';
import DeviceConditional from './Components/DeviceConditional/DeviceConditional';
import Banners from './Components/Banners/Banners';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoading: false
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     isLoading: true
  //   })
  //   fetch('./utils/iPhone.json')
  //     .then(response => {
  //       response.json();
  //
  //       console.log(response);
  //     })
  //     .then(data => this.setState(
  //       {
  //         results: data.results,
  //         isLoading: false
  //       })
  //     );
  // }

  render() {
    // const { results, isLoading } = this.state;
    //
    // if (isLoading) {
    //   return <p>Loading ...</p>;
    // }

    return (
      <div className="App">
        <div>
          <DeviceConditional />
        </div>
        <div>
          <Banners />
        </div>
        {/* <div>
          {
            iPhone.map((element, key) => {
              return (
                <ul key={key}>
                  <li><img src={element.icon} alt='1' /> {element.title} {element.descr}</li>
                </ul>
              );
            })
          }
        </div> */}
      </div>
      /* <div>
        {results.map(result =>
          <ul key={result.phone}>
            <li>{result.name.title} {result.name.first} {result.name.last}</li>
          </ul>
        )}
      </div> */
    );
  }
}

export default App;
