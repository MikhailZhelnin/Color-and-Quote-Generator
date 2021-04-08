import React, { useState, useEffect } from 'react';

import { AiOutlineTwitter } from 'react-icons/ai';

import './Quote.css';

const qouteUrl = 'https://type.fit/api/quotes';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [twitterURL, setTwitterURL] = useState('');

  const getQuoteAndAuthor = () => {
    fetch(qouteUrl)
      .then((resp) => resp.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const quote = data[randomIndex].text;
        const author = data[randomIndex].author;
        setQuote(quote);
        setAuthor(author);
        setTwitterURL(
          'https://twitter.com/intent/tweet/?text=' + data[randomIndex].text.replace(/ /g, '+'),
        );
      });
  };

  useEffect(() => {
    getQuoteAndAuthor();
  }, []);

  return (
    <div className="quote">
      <div className="quote__wrapper">
        <div className="quote__main">
          <p className="quote__text">&#8220; {quote} &#8221;</p>
          <span className="quote__author">- {author}</span>
        </div>
        <div className="quote__buttons">
          <button className="quote__btn btn-get" onClick={getQuoteAndAuthor}>
            Get New Quote
          </button>
          <a className="quote__btn btn-share" href={twitterURL} target="_blanc">
            Share <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quote;
