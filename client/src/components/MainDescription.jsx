import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class MainDescription extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAll: false
    }
  }

  showMore = () => this.setState({ showAll: true });
  showLess = () => this.setState({ showAll: false });
  render() {
    const { currentRoom } = this.props;
    const { showAll } = this.state;

    if (currentRoom.mainDescr.length <= 250) {
      return (<div>{currentRoom.mainDescr}</div>)
    }
    if (showAll) {
      return (
        <div>
          {
            currentRoom.mainDescr.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/><br/></span>
            })
          }
          <a onClick={this.showLess}>Hide</a>
        </div>)
    }
    const toShow = currentRoom.mainDescr.substring(0, 250) + "...";
    return (<div>
      {toShow}
      <br/>
      <a href="#" role="button" onClick={this.showMore}>Read more about the space</a>
    </div>)
  }
}
export default MainDescription