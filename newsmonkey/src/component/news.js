import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spineer from './spineer';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
    category: 'general'

  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0


    }
    document.title = `${this.props.category}-NewsMonkey`

  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=36aecf4c3dea407e97ab72cd304ffc7f&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata)
    this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false })

  }
  async componentDidMount() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=36aecf4c3dea407e97ab72cd304ffc7f&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata)
    this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false })
  }
  handlepreviousClick = async () => {
    // // console.log("PRevios")
    // // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=36aecf4c3dea407e97ab72cd304ffc7f&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
    // // this.setState({loading:true})
    // // let data=await fetch(url);
    // // let parseddata=await data.json();
    // // console.log(parseddata)
    // // this.setState({
    // //   page:this.state.page-1,
    // //   articles:parseddata.articles,
    // //   loading:false
    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNews();

  }
  handleNextClick = async () => {
    //   if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize))){


    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=36aecf4c3dea407e97ab72cd304ffc7f&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
    //   this.setState({loading:true})
    //   let data=await fetch(url);
    //   let parseddata=await data.json();



    //   this.setState({
    //     page:this.state.page+1,
    //     articles:parseddata.articles,
    //     loading:false
    //   })

    // }
    this.setState({ page: this.state.page + 1 })
    this.updateNews();
  }
  render() {
    console.log("Render")
    return (
      <div className='container my-3'>

        <h2 className='text-center '>NewsMonkey top headlines</h2>
        {/* {this.state.loading&&<Spineer/>} */}
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.totalResults}
          loader={<Spineer/>}>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} url={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

              </div>


            })}

          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlepreviousClick}>&larr;Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>

      </div>
    )
  }
}

export default News