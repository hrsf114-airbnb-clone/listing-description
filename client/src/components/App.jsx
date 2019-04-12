import React from 'react';
import Listing from './Listing.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomNum: '',
      isMounted: false
    }
  }

  componentDidMount() {
    this.setState({
      roomNum: window.location.pathname.split('/').filter((el) => !!el).pop(),
      isMounted: true
    });
  }

  render() {
    const { roomNum, isMounted } = this.state
    if (isMounted) {
      return (
        <div>
          <Listing roomNum={roomNum} />
        </div>
      )
    } else {
      return (
        <div>Loading....</div>
      )
    }

  }
}

export default App;
