import React, { Component } from 'react'
import Load from '../../load1.gif'
import './Spinner.css'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Load} alt='loading' className='loadimg' />
      </div>
    )
  }
}

export default Spinner
