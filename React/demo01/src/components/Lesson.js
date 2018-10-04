import React, { Component } from 'react';


class Lesson extends Component {
  render() {
    return (
      <li className='list-group-item'>{this.props.name}</li>
    )
  }
}

export default Lesson;
