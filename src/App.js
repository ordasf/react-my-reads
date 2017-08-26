import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchBook from './SearchBook'
import BookList from './BookList'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookList) => {
      this.setState({ books: bookList })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList bookList={this.state.books}/>
          )} />
        <Route path="/search" component={SearchBook}/>
      </div>
    )
  }
}

export default BooksApp
