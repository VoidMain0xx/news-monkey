import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { tittle, description, imageUrl, url, author, publishedAt, source} = this.props;
        return (
            <div className='container my-02'>
                <div className="card my-3" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "161.1px", width: "286.4px" }} />
                    <div className="card-body">
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
                            {source}
                        </span>
                        <h5 className="card-title">{tittle}...</h5>
                        <p className="card-text">{description}...</p>
                        <p>{author} on </p>
                        <p>{new Date(publishedAt).toGMTString()}</p>
                        <a href={url} target='_blank' rel="noreferrer" className="btn btn-primary">Read More &rarr;</a>
                    </div>
                </div>
            </div>
        )
    }
}
