import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class Amenities extends React.Component {
  constructor(props) {
    super(props)
    this.amenitiesIcon = {
      wifi: 'fa-wifi',
      dryer: 'fa-tshirt',
      'laptop friendly workspace': 'fa-laptop',
      cable: 'fa-tv',
      parking: 'fa-parking',
      washer: 'fa-tint'
    }

    this.notes = {
      wifi: 'Continuous access in the listing',
      dryer: 'In the building, free or for a fee',
      'laptop friendly workspace': 'A table or desk with space for a laptop and a chair that’s comfortable to work in',
      washer: 'In the building, free or for a fee',
      essentials: 'Towels, bed sheets, soap, and toilet paper',
      heating: 'Central heating or a heater in the listing',
      kitchen: 'Space where guests can cook their own meals',
    }
  }

  getTopAmenities(currentRoom) {
    let basicAmenities = currentRoom.Amenities.basic
    return Object.keys(basicAmenities).filter((key) => basicAmenities[key]).slice(0, 4);
  }

  getDesc(subCategory) {
    if (this.notes[subCategory]) {
      return (<div className="thin">{this.notes[subCategory]}</div>)
    } else {
      return (<div></div>)
    }

  }

  AmenitiesModal(amenities) {
    const content = Object.keys(amenities).map((category) => {
      return (
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12 capitalize category"><b>{category}</b></div>
            {Object.keys(amenities[category]).map((subCategory) => {
              return (
                <div className="col-md-12 capitalize">
                  {subCategory}
                  {this.getDesc(subCategory)}
                  <hr />
                </div>
              )
            })}
          </div>
        </div>
      )
    });
    return (
      <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{ float: 'left' }}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="col-md-12 category">
                  <h2>Amenities</h2>
                </div>
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { currentRoom } = this.props;
    const top = this.getTopAmenities(currentRoom);
    return (
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
        <div className="col-md-12">
          <a href="#" role="button" data-toggle="modal" data-target="#modal">See all amenities</a>
          {this.AmenitiesModal(currentRoom.Amenities)}
        </div>
      </div>
    )
  }
}
export default Amenities