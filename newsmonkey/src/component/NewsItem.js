import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,url,newsurl,author,date,source}=this.props;
    return (
      <div className="card" style={{width: "18rem"}}>
      <img src={url?url:"https://c.ndtvimg.com/2024-03/db4hrou8_mukhtar-ansari_625x300_29_March_24.jpg"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {source}
   
  </span>
        <p className="card-text">{description}</p>
        <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read more..</a>
        <p className="card-text"><small>By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
      </div>
    </div>
    )
  }
}

export default NewsItem