import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';

//const { Component } = require("react");

export class BookItem extends React.Component {
    
    //neccessary for button click to work
    constructor(){
        //invoke parent constuctor
        super();

        //bind
        this.DeleteBook = this.DeleteBook.bind(this);
    }
    
    //method to remove a book item from database
    DeleteBook(e){
        //prevent method being called on page load
        e.preventDefault();

        console.log('Delete: '+this.props.book._id)

        axios.delete("http://localhost:4000/api/books/"+this.props.book._id)
        //invoke function to refresh page
        .then(() => {
            //reload book data after deletion
            this.props.ReloadBooks();
        })
        .catch();
    }

    render() {
        return (
            <div>
                
                {/*display book details in card format*/}
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Title: {this.props.book.Title}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Year: {this.props.book.Year}</ListGroup.Item>
                        <ListGroup.Item>Author: {this.props.book.Author}</ListGroup.Item>
                        <ListGroup.Item>Genre: {this.props.book.Genre}</ListGroup.Item>
                        <Link to={'/editBook/'+this.props.book._id} className="btn btn-primary">Edit</Link>
                        <Button variant="danger" onClick={this.DeleteBook} >Delete</Button>
                    </ListGroup>
                </Card>
                <br />

            </div>
        );
    }
}

