/* *****************************
            unfinished
***************************** */


import React from 'react';

//var level, noOfPages, noOfHours;

//const { Component } = require("react");

export class Calculator extends React.Component {
    
    /* onSubmit(e){
       
    } */
    
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>

                    {/* number of pages input box */}
                    <div className='form-group'>
                        <label> <h3> Enter Number of Pages: </h3> </label>
                        <input type='text' className='form-control' ></input>
                    </div>

                    <label> <h3> Choose Reading Level: </h3> </label>
                    {/* submit button */}
                    <div className='form-group'>
                    
                        <input type='submit' value='Beginner' className='btn btn-primary'></input>
                -
                        <input type='submit' value='Average' className='btn btn-primary'></input>
                -
                        <input type='submit' value='   Fast   ' className='btn btn-primary'></input>

                    </div>

                </form>
                <br />
                <h2>Estimated Time To Read: </h2>
            </div>
        );
    }
}

