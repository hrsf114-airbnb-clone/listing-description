import React from 'react'
import { tsImportEqualsDeclaration } from '@babel/types';
import MainDescription from './MainDescription.jsx'
import Amenities from './Amenities.jsx';

class Listing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: null,
      isMounted: false
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/listing/${this.props.roomNum}`)
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
    const { currentRoom } = this.state
    if (this.state.isMounted && this.state.currentRoom) {      
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-9">
                  <h1>{currentRoom.title}</h1>
                  <div>{currentRoom.locality}</div>
                  <div className="row">
                    <div className="col-md-12 sub-head">
                      <i className="fas fa-home icon-main"></i>
                      {
                        <b>{(currentRoom.bedrooms > 1) ?
                          currentRoom.description[Math.floor(Math.random() * (currentRoom.description.length))] : 'Private room'}
                        </b>
                      }
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-2">{currentRoom.guests} guests</div>
                        <div className="col-md-3">{currentRoom.bedrooms} bedrooms</div>
                        <div className="col-md-2">{currentRoom.beds} beds</div>
                        <div className="col-md-2">{currentRoom.baths} baths</div>
                      </div>
                    </div>
                    <div className="col-md-12 sub-head">
                      <i className={`fas ${currentRoom.highlight[2]} icon-main`}></i>
                      <b>{currentRoom.highlight[0]}</b>
                    </div>
                    <div className="col-md-12">
                      {currentRoom.highlight[1]}
                    </div>
                    {
                      (currentRoom.hostObj.superhost === true) &&
                      <div>
                        <div className="col-md-12 sub-head superhost">
                          <i className="fas fa-medal icon-main"></i>
                          <b>{currentRoom.hostObj.name} is a Superhost</b>
                        </div>
                        <div className="col-md-12">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
                      </div>
                    }
                  </div>

                  <hr />
                  <div>
                    <MainDescription currentRoom={currentRoom} />
                  </div>
                  <hr />
                  <div>
                    <Amenities currentRoom={currentRoom} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="loading">Loading...</div>
      )
    }
  }
}

export default Listing
