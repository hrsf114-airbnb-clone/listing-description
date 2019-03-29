import React from 'react'

class Listing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: {},
      isMounted: false
    }


  }

  //this.props - object
  componentDidMount() {
    console.log(this.props + 'in did mount listing')
    fetch(`http://localhost:3000/api/listing/${this.props.currentListingId}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            currentRoom: result,
            isMounted: true
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
    console.log('in listing render')
    if (this.state.isMounted) {
      return (
        <div>
          <div>{this.state.currentRoom.title}</div>
          <div>{this.state.currentRoom.hostObj.city}</div>
          <div>{this.state.currentRoom.hostObj.name}</div>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }

}

export default Listing
