import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount = () => {
    this.setState({ tweets: this.props.newTweets })
  }

  componentWillReceiveProps = nextProps => {
    const tweets = nextProps.newTweets.concat(this.state.tweets)
    this.setState({ tweets: tweets })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    nextState.tweets.length > this.state.tweets.length ? true : false
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
