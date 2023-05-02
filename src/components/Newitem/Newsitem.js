import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let{title,description,imageUrl,newsUrl,author,date,source}=this.props
    return (
      <div className='my-2'>
        <div className="card">
        <div className="imgdiv" >

  <img src={!imageUrl?'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Y7SPFJQNNHFPVGJ6KSA76GV7AI.jpg&w=1440':imageUrl} className="card-img-top" alt="..." style={{height:'100%'}}/>
        </div>
  <div className="d-flex my-topbar">

        <span className="badge rounded-pill bg-warning" style={{left:'89%',zIndex:'1'}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
  </div>
    <h5 className="card-title">{title}</h5>
  <div className="card-body">
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?'Unknown':author} published on { new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='_blank' className="btn btn-primary buttonnews">Go to news</a>
  </div>
    {/* <a href='/no-unused-vars'  className="btn btn-primary">Go to news</a> */}
  </div>
</div>
      // </div>
    )
  }
}

export default Newsitem
