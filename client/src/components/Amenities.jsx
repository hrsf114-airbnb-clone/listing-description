import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class Amenities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,      
    }
    this.amenitiesIcon = {
      wifi: 'fa-wifi',
      dryer: 'fa-tshirt',
      'laptop friendly workspace': 'fa-laptop',
      cable: 'fa-tv',
      parking: 'fa-parking',
      washer: 'fa-tint'
    }
  }

  getTopAmenities(currentRoom) {
    let basicAmenities = currentRoom.Amenities.basic
    return  Object.keys(basicAmenities).filter((key) => basicAmenities[key]).slice(0, 4);  
  }
  
  AmenitiesModal() {
    const { currentRoom } = this.props;
    return (
      <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* {
                for (let service in currentRoom.Amenities) {

              }
               } */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )

  }

  render() {
    const { currentRoom } = this.props;
    const { showModal } = this.state;
    const top = this.getTopAmenities(currentRoom);
    return (
      <div className="container">
        <div className="row">
          {
            top.map((el, index) => {                            
              return (
                <div className="col-md-6" key={index}>
                  <i className={`fas ${this.amenitiesIcon[el]} icon-main`}></i>
                  {el}
                </div>
              )
            })
          }
        </div>
        <a data-toggle="modal" data-target="#modal">See all amenities</a>
        {this.AmenitiesModal()}
      </div>
    )
  }
}
export default Amenities