import React, { Component } from 'react';
import DeviceConditional from './Components/DeviceConditional/DeviceConditional';
import Collection from './Components/Collection/Collection';
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
    let { collection } = this.props;
    //
    // if (isLoading) {
    //   return <p>Loading ...</p>;
    // }

    return (
      <div className="App">
          <DeviceConditional />
          <Banners />
          <Collection collection={collection} />
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
