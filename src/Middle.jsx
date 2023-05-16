import React, { useState, useEffect } from 'react';
import './app.css';
import toast, { Toaster } from 'react-hot-toast';
import {
  UnmuteIcon,
  ShareAndroidIcon,
  CopyIcon,
  PlusCircleIcon,
} from '@primer/octicons-react';
import Loader from './Loader';
const Middle = () => {
  const [quoteText, setQuoteText] = useState('loading...');
  const [quoteAuthor, setQuoteAuthor] = useState('loading...');
  const [isLoading, setIsLoading] = useState(false);
  const [bgCssColor, setBgColor] = useState('#4161d8');

  useEffect(() => {
    getQuote();
  }, []);
  const getQuote = async () => {
    setIsLoading(true);
    let response = await fetch('https://api.quotable.io/quotes/random');
    let data = await response.json();
    setQuoteText(data[0].content);
    setQuoteAuthor(data[0].author ? data[0].author : 'unknown');
    setIsLoading(false);
  };

  const speech = () => {
    let utterance = new SpeechSynthesisUtterance(
      `${quoteText} this quote is said by ${quoteAuthor} `
    );
    speechSynthesis.speak(utterance);
  };

  const changeColor = (color) => {
    const bgColor = document.querySelector(':root');
    bgColor.style.setProperty('--main-bg-color', color);
    setBgColor(color);
  };

  const share = () => {
    let text = `${quoteText} by ${quoteAuthor}`;
    navigator.share({
      text: text,
    });
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='made-by'>
        <p>Made with ❤️ by Atul </p>
      </div>
      <div className='center'>
        <p> Quotes Generator</p>
        {isLoading ? (
          <Loader bgColor={bgCssColor} />
        ) : (
          <div className='quote-box'>
            <div className='quote-open quote-icon'>
              <i className='fa-solid fa-quote-left' />
            </div>
            <p className='quote-text'>{quoteText}</p>
            <div className='quote-close quote-icon'>
              <i className='fa-solid fa-quote-right' />
            </div>
            <div className='author'>{quoteAuthor}</div>
          </div>
        )}
        <div className='buttons'>
          <div className='functions'>
            <div>
              <button disabled={isLoading} onClick={speech}>
                <UnmuteIcon size={24} />
              </button>
              <button disabled={isLoading} onClick={share}>
                <ShareAndroidIcon size={24} />
              </button>
              <button
                disabled={isLoading}
                onClick={() => {
                  let data = navigator.clipboard.writeText(
                    `${quoteText} by "${quoteAuthor}"`
                  );
                  data.then(() => {
                    console.log('copied');
                    toast.success('Quote Copied', {
                      style: {
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontSize: '20px',
                      },
                    });
                  });
                }}>
                <CopyIcon size={24} />
              </button>
            </div>
            <button
              disabled={isLoading}
              onClick={getQuote}
              className='new-quote-btn'>
              New Quote <PlusCircleIcon size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className='box'>
        <span
          onClick={(e) => {
            changeColor(window.getComputedStyle(e.target).backgroundColor);
          }}
          className='dot dot1'
        />
        <span
          onClick={(e) => {
            changeColor(window.getComputedStyle(e.target).backgroundColor);
          }}
          className='dot dot2'
        />
        <span
          onClick={(e) => {
            changeColor(window.getComputedStyle(e.target).backgroundColor);
          }}
          className='dot dot3'
        />
        <span
          onClick={(e) => {
            changeColor(window.getComputedStyle(e.target).backgroundColor);
          }}
          className='dot dot4'
        />
        <span
          onClick={(e) => {
            changeColor(window.getComputedStyle(e.target).backgroundColor);
          }}
          className='dot dot5'
        />
        <span
          onClick={(e) => {
            changeColor(window.getComputedStyle(e.target).backgroundColor);
          }}
          className='dot dot6'
        />
        <span
          onClick={(e) => {
            changeColor(window.getComputedStyle(e.target).backgroundColor);
          }}
          className='dot dot7'
        />
        <span
          onClick={(e) => {
            changeColor(window.getComputedStyle(e.target).backgroundColor);
          }}
          className='dot dot8'
        />
        <span
          onClick={(e) => {
            changeColor(window.getComputedStyle(e.target).backgroundColor);
          }}
          className='dot dot9'
        />
      </div>
    </>
  );
};

export default Middle;
