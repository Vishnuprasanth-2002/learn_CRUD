import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
function Nav() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [addTweet, setAddTweet] = useState([]);

  function formatTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes} ${amOrPm}`;
  }

  const getCurrentDateFormatted = () => {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

    return formattedDate;
  };

  function handleLike(id){
      
  }

  function handleAddTweet(tweet) {
    const data = {
      id: uuidv4(),
      tweet: tweet,
      date: getCurrentDateFormatted(),
      time: formatTime(),
      datetime: new Date(),
    };

    const updatedTweets = [...addTweet, data].sort(
      (a, b) => b.datetime - a.datetime
    );

    setAddTweet(updatedTweets);
    setIsShowForm(false);
  }
  return (
    <div>
      <div className="navbar">
        <div className="link">
          <button onClick={() => setIsShowForm(false)} className="home-btn">
            HOME
          </button>
          <button onClick={() => setIsShowForm(true)} className="add-btn">
            ADD FORM
          </button>
        </div>
        <div>
          <h1>Tweety</h1>
        </div>
      </div>
      {isShowForm ? (
        <>
          <Form addTweet={(tweet) => handleAddTweet(tweet)} />
        </>
      ) : (
        <>
          <div className="search">
            <input type="text" placeholder="Search here ....." />
            <button className="Search-btn">Search</button>
          </div>
          <div className="tweet-parent"></div>
          <div className="tweet-container">
            <div className="tweet-list-title">
              <h2>
                List of <span className="tweet-list">Tweet</span>
              </h2>
              ``
            </div>
            <div className="tweet-records">
              {addTweet.map((item, index) => {
                return (
                  <div key={index} id={item.id} className="card">
                    <p>{item.tweet}</p>
                    <div className="emoji-head">
                      <div className="emoji">
                        <button
                          className="like"
                          id={`like-${item.id}`}
                          onClick={() => handleLike(`like-${item.id}`)}
                        >
                          &#128077;
                        </button>
                        <button
                          id={`dislike-${item.id}`}
                          onClick={() => handleLike(`dislike-${item.id}`)}
                        >
                          &#128078;
                        </button>
                      </div>
                      <div className="date">
                        {item.date}, {item.time}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Nav;
