import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { test_url } from './api'


function Offer1() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [main, setMain] = useState([]);
    const [bookList, setBookList] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(test_url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setMain(result);
                    setBookList(result.results);
                    setBooks(result.results.books);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <StyledMain>
                <StyledBooks>
                    {books.map((book) => (
                        <StyledOffer1>
                            <SyledImage><img src={book.book_image} /></SyledImage>
                            <div><h3>{book.title}</h3></div>
                            <div><p>by: {book.author}</p></div>
                            <div><small>Check the Price: <a href={book.buy_links[0].url} target="_blank">{book.buy_links[0].name}</a>, <a href={book.buy_links[1].url} target="_blank">{book.buy_links[1].name}</a></small></div>
                        </StyledOffer1>
                    ))}
                </StyledBooks>
            </StyledMain>
        );
    }
}

const StyledMain = styled.div`
 
    h1 {
        font-family: 'Lato', sans-serif;

    }

    h2, h3, small {
        font-family: 'Work Sans', sans-serif;
    }

    p {
        font-family: 'Prata', serif;
        font-size: 0.8rem;
    }
`;

const StyledOffer1 = styled.div`
    /* min-height: 30vh; */
    width: 17rem;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    border: solid;
    border-color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        text-decoration: none;
        color: slategray;
    }
    
`;

const StyledBooks = styled.div`
    /* min-height: 70vh; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const SyledImage = styled.div`
    
    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`;

export default Offer1;
