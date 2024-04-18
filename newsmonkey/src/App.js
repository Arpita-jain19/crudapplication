import React, { Component } from 'react'
import Navbar from './component/navbar'
import News from './component/news'
import {BrowserRouter as Router,Route,Link,Routes}from 'react-router-dom'
export default class App extends Component {
  pagesize=10
  c='Arpita'
  render() {
    return (

      <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/"  element={<News pagesize={this.pagesize} key="general" country="in" category="general" />} />
          <Route exact path="/about"  element={<News pagesize={this.pagesize} country="in" key="About"category="About" />} />
          <Route exact path="/business" element={<News pagesize={this.pagesize} country="in" key="business"  category="business" />} />
          <Route  exact path="/entertainment"  element={<News pagesize={this.pagesize} country="in" key="entertainment"category="entertainment" />} />
          <Route  exact path="/health"  element={<News pagesize={this.pagesize} country="in" key="health" category="health" />} />
          <Route  exact path="/science" element={<News pagesize={this.pagesize} country="in" category="science" key="science"  />} />
          <Route  exact path="/technology"  element={<News pagesize={this.pagesize} country="in" category="technology" key="technology"/>} />
          <Route  exactkey=""  path="/sports" element={<News pagesize={this.pagesize} country="in" category="sports"  key="sports" />} />
        </Routes>
      </Router>
    </div>
    )
  }
}


