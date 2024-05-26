import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'

export default class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0
    }
  }

  async componentDidMount() {
    console.log("This is Component did mount");
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${this.props.APIkey}&pageSize=${this.props.pageSize}&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handleNext = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${this.props.APIkey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  }

  handlePrevious = async () => {
    console.log("Prev is clicked");
    let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${this.props.APIkey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  }

  render() {
    console.log("This Is render Function");
    return (
      <div className='container'>
        <h1 className='m-5'><i>News Monkey - Top Headline on Techcrunch</i></h1>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
            return (
              <div className='col-md-3' key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            )
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePrevious}
            className="btn btn-dark">
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            onClick={this.handleNext}
            className="btn btn-dark">
            Next &rarr;
          </button>
        </div>
      </div>
    )
  }
}
