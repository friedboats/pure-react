import React from "react";
import reactDom from "react-dom";
import moment from "moment";
import PropTypes from "prop-types";
import "./index.css";

function Tweet({ tweet }) {
  return (
    <>
      <div className='tweet'>
        <Avatar hash={tweet.gravatar} />
        <div className='content'>
          <Author author={tweet.author} /> <Time time={tweet.timestamp} />
          <Message text={tweet.message} />
          <div className='buttons'>
            <ReplyButton />
            <RetweetButton count={tweet.retweets} />
            <LikeButton count={tweet.likes} />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
      <Comment author='somebody' message='a likable message' likes={2} />
      <Comment author='mr_unpopular' message='unlikable message' />
      <Comment author='mr_unpopular' message='another message' likes={0} />
      <Comment author='error_missing_message' message='foo' />
      <Comment author='Gerry' message='mystery author' />
    </>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string.isRequired,
    gravatar: PropTypes.string.isRequired,
    author: PropTypes.shape({
      handle: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    likes: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person",
  },
  likes: 3,
  retweets: 10,
  timestamp: "2016-07-30 21:24:37",
};

const Avatar = ({ hash }) => {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className='avatar' alt='avatar' />;
};

Avatar.propTypes = {
  hash: PropTypes.string.isRequired,
};

function Message({ text }) {
  return <div className='message'>{text}</div>;
}

Message.propTypes = {
  text: PropTypes.string,
};

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className='author'>
      <span className='name'>{name}</span>
      <span className='handle'>@{handle}</span>
    </span>
  );
}

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className='time'>{timeString}</span>;
};

Time.propTypes = {
  time: PropTypes.string,
};

const ReplyButton = () => <i className='fa fa-reply reply-button' />;

const Count = ({ count }) => {
  if (count > 0) {
    return <span className='retweet-count'>{count}</span>;
  } else {
    return null;
  }
};

const RetweetButton = ({ count }) => (
  <span className='retweet-button'>
    <i className='fa fa-retweet' />
    <Count count={count} />
    {/* {getRetweetCount(count)} */}
  </span>
);

RetweetButton.propTypes = {
  count: PropTypes.number,
};

const LikeButton = ({ count }) => (
  <span className='like-button'>
    <i className='fa fa-heart' />
    <span className='like-count'>{count || null}</span>
  </span>
);

LikeButton.propTypes = {
  count: PropTypes.number,
};

const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button' />
);

const Comment = ({ author, message, likes }) => (
  <div>
    <div className='author'>{author}</div>
    <div className='message'>{message}</div>
    <div className='likes'>{likes > 0 ? likes : "No"} likes</div>
  </div>
);

Comment.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number,
};

reactDom.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
