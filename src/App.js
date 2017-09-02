import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchBook from './SearchBook'
import BookList from './BookList'

class BooksApp extends React.Component {
  state = {
    shelves: {
      currentlyReading: [],
      read: [],
      wantToRead: []
    }
  }

  updateBookShelf = (book, targetShelf) => {
    BooksAPI.update(book, targetShelf).then((newShelves) => {
      let promises = []
      promises = promises.concat(newShelves.currentlyReading.map(bookId => BooksAPI.get(bookId)))
      promises = promises.concat(newShelves.wantToRead.map(bookId => BooksAPI.get(bookId)))
      promises = promises.concat(newShelves.read.map(bookId => BooksAPI.get(bookId)))
      Promise.all(promises).then(results => {
        this.setState({
          shelves: {
            currentlyReading: results.filter(book => book.shelf === 'currentlyReading'),
            read: results.filter(book => book.shelf === 'read'),
            wantToRead: results.filter(book => book.shelf === 'wantToRead')
          }
        })
      })
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookList) => {
      this.setState({
        shelves: {
          currentlyReading: bookList.filter(book => book.shelf === 'currentlyReading'),
          read: bookList.filter(book => book.shelf === 'read'),
          wantToRead: bookList.filter(book => book.shelf === 'wantToRead')
        }
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList shelves={this.state.shelves} onChangeBookShelf={this.updateBookShelf} />
        )} />
        <Route path="/search" render={() => (
          <SearchBook onChangeBookShelf={this.updateBookShelf}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
