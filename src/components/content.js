import React from 'react';
//import { Quotes } from './quotes';
import Card from 'react-bootstrap/Card';
import { Books } from './books';

//const { Component } = require("react");

var listOfQuotes = [ ["A reader lives a thousand lives before he dies. The man who never reads lives only one.", " George R.R. Martin"], 
["We read to know we're not alone.", " William Nicholson"],
["You can never get a cup of tea large enough or a book long enough to suit me.", " C.S. Lewis"],
["The more that you read, the more things you will know. The more that you learn, the more places you'll go.", " Dr. Seuss"],
["It is what you read when you don't have to that determines what you will be when you can't help it.", " Oscar Wilde"],
["Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.", " Charles W. Eliot"],
["Let us read, and let us dance; these two amusements will never do any harm to the world.", " Voltaire"],
["Think before you speak. Read before you think.", " Fran Lebowitz"],
["There are worse crimes than burning books. One of them is not reading them.", " Joseph Brodsky"],
["In the case of good books, the point is not to see how many of them you can get through, but rather how many can get through to you.", " Mortimer J. Adler"]];

const randomQuote = Math.floor(Math.random() * listOfQuotes.length);
console.log(randomQuote, listOfQuotes[randomQuote]);

export class Content extends React.Component {

    render() {
        return (
            <div>
                <h1>Library Organiser Home Page</h1>

                <br />

                <Card>
                    <Card.Header>Quote</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                {listOfQuotes[randomQuote][0]}{' '}
                            </p>
                            <footer className="blockquote-footer">
                                {listOfQuotes[randomQuote][1]}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}

