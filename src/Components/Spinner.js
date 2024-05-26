import React, { Component } from 'react'
import Internet from '../Components/images/Running heart.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
      <img src={Internet} alt='Internet' />
      </div>
    )
  }
}
