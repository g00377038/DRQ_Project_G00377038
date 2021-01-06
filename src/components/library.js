import React from 'react';
import { Books } from './books';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import {Navbar, Nav, Container} from 'react-bootstrap'; //for navbar

//const { Component } = require("react");

export class Library extends React.Component{

    //neccessary for event to work
    constructor() {
        //invoke parent constuctor
        super();
        
        this.ReloadBooks = this.ReloadBooks.bind(this);
    }

    state = {
        books: []
    };
    
    //component life cycle hook
    componentDidMount(){
        //retrieve info from url
        axios.get('http://localhost:4000/api/books')
            .then( (response) => {
                //send book info from api to state
                this.setState({ books: response.data});
            })
            .catch( (error) => {
                //log error to console
                console.log(error);
            })
    }

    //reload book data
    ReloadBooks(){
        //retrieve info from url
        axios.get('http://localhost:4000/api/books')
            .then( (response) => {
                //send book info from api to state
                this.setState({ books: response.data});
            })
            .catch( (error) => {
                //log error to console
                console.log(error);
            })
    }

    onSubmit(e){
        e.preventDefault();       
    }
    

    render() {
        return (
            <div>
                <div className='form-group'>

                    {/* link to "Add Book" component */}
                    <Container>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="/addBook"> <h3> Click Here to Add New Book to Library </h3> </Navbar.Brand>
                        </Navbar>
                    </Container>

                    <br />

                </div>

                {/* pass movies to the object "movies" */}
                <CardGroup>
                    <Books books={this.state.books} ReloadBooks={this.ReloadBooks}></Books>
                </CardGroup>
            </div>
        );
    }
}

