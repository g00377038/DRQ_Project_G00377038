import React from 'react';
import axios from'axios';

//const { Component } = require("react");

export class EditBook extends React.Component{
    
    constructor(){
        //invoke parent constuctor
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);

        this.state = {
            Title:'',
            Year:'',
            Author:'',
            Genre:''
        }
    }

    //lifecycle hook, when component becomes active in the view
    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/books/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                _id: response.data._id,
                Title: response.data.Title,
                Year: response.data.Year,
                Author: response.data.Author,
                Genre: response.data.Genre
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    onSubmit(e){
        e.preventDefault();
        alert(this.state.Title + "  edited successfully.")
        
        const editedBook = {
            _id: this.state._id,
            Title: this.state.Title,
            Year: this.state.Year,
            Author: this.state.Author,
            Genre: this.state.Genre
        }

        //edit record 
        axios.put('http://localhost:4000/api/books/'+this.state._id, editedBook)
        .then(response => {
            console.log(response)
        })
        .catch();
    }

    onChangeTitle(e){
        this.setState({
            //update book title
            Title: e.target.value
        })
    }

    onChangeYear(e){
        this.setState({
            //update book year
            Year: e.target.value
        })
    }

    onChangeAuthor(e){
        this.setState({
            //update book author
            Author: e.target.value
        })
    }

    onChangeGenre(e){
        this.setState({
            //update book genre
            Genre: e.target.value
        })
    }

    render() {
        return (
            <div className='App'>

                <form onSubmit={this.onSubmit}>
                    {/* title input box */}
                    <div className='form-group'>
                        <label>Edit Book Title: </label>
                        <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>

                    {/* year input box */}
                    <div className='form-group'>
                        <label>Edit Book Year: </label>
                        <input type='text' className='form-control' value={this.state.Year} onChange={this.onChangeYear}></input>
                    </div>

                    {/* author input box */}
                    <div className='form-group'>
                        <label>Edit Book Author: </label>
                        <input type='text' className='form-control' value={this.state.Author} onChange={this.onChangeAuthor}></input>
                    </div>

                    {/* genre input box */}
                    <div className='form-group'>
                        <label>Edit Book Genre: </label>
                        <input type='text' className='form-control' value={this.state.Genre} onChange={this.onChangeGenre}></input>
                    </div>

                    {/* submit button */}
                    <div className='form-group'>
                        <input type='submit' value='Submit Changes' className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }
}
