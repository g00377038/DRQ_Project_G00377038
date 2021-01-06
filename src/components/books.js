import React from 'react';
import {BookItem} from './bookItem';

//const { Component } = require("react");

export class Books extends React.Component{
    render(){
        //split array into individual books
        return this.props.books.map( (book) => {
            //pass a book to "BookItem" component, for every book return book item and "ReloadBooks" method
            return <BookItem book = {book} ReloadBooks={this.props.ReloadBooks}></BookItem>
        })
    }
}

