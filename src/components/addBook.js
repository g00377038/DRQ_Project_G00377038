import React from 'react';
import axios from'axios';

export class AddBook extends React.Component{
    
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
    
    onSubmit(e){
        e.preventDefault();
        alert(this.state.Title + " added.")
        
        const newBook = {
            Title: this.state.Title,
            Year: this.state.Year,
            Author: this.state.Author,
            Genre: this.state.Genre
        }
        
        //send "newBook" to server
        axios.post('http://localhost:4000/api/books', newBook)
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    onChangeTitle(e){
        //set book Title
        this.setState({
            Title: e.target.value
        })
    }

    onChangeYear(e){
        //set book Year
        this.setState({
            Year: e.target.value
        })
    }

    onChangeAuthor(e){
        //set book Author
        this.setState({
            Author: e.target.value
        })
    }

    onChangeGenre(e){
        //set book Genre
        this.setState({
            Genre: e.target.value
        })
    }

    render() {
        return (
            <div className='App'>
                
                <form onSubmit={this.onSubmit}>
                    {/* title input box */}
                    <div className='form-group'>
                        <label>Add Book Title: </label>
                        <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>

                    {/* year input box */}
                    <div className='form-group'>
                        <label>Add Book Year: </label>
                        <input type='text' className='form-control' value={this.state.Year} onChange={this.onChangeYear}></input>
                    </div>

                    {/* author input box */}
                    <div className='form-group'>
                        <label>Add Book Author: </label>
                        <input type='text' className='form-control' value={this.state.Author} onChange={this.onChangeAuthor}></input>
                    </div>

                    {/* genre input box */}
                    <div className='form-group'>
                        <label>Add Book Genre: </label>
                        <input type='text' className='form-control' value={this.state.Genre} onChange={this.onChangeGenre}></input>
                    </div>

                    {/* submit button */}
                    <div className='form-group'>
                        <input type='submit' value='Add Book' className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }
}

