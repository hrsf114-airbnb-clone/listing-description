import React from 'react';
import Listing from './Listing.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      currentListingId: '',
      isMounted: false
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/listing`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result,
            currentListingId: result[Math.floor(Math.random() * 100)]._id,
            isMounted: true
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
    const { data, currentListingId, isMounted } = this.state
    if (isMounted) {
      return (
        <div>
          <Listing currentListingId={currentListingId} />
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }

  }
}

export default App;
