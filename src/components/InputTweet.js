import "./InputTweet.css";

export default function InputTweet(props) {
  function handleImageChange(e) {
    props.image(e.target.files[0]);
  }

  function handleUsernameChange(e) {
    props.username(e.target.value);
  }

  function handleHandleChange(e) {
    props.handle(e.target.value);
  }

  // function handleTweetChange(e) {
  //   console.log(e);
  //   props.tweet(e.target.value);
  // }

  function handleTweetChange(e) {
    const tweetText = e.target.value.replace(/\n/g, "<br>");
    props.tweet(tweetText);
  }

  return (
    <div className="tweet_input">
      <div className="input_containers">
        <label htmlFor="profile_image">Upload image</label>
        <input
          id="profile_image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div className="input_containers">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          placeholder="John"
          type="text"
          onChange={handleUsernameChange}
        />
      </div>
      <div className="input_containers">
        <label htmlFor="handle">Handle</label>
        <input
          id="handle"
          placeholder="@john1997"
          type="text"
          onChange={handleHandleChange}
        />
      </div>
      <div className="input_containers">
        <label htmlFor="Tweet">Tweet</label>
        <textarea
          placeholder="Today is a beautiful day..."
          name="Tweet"
          cols="50"
          rows="3"
          onChange={handleTweetChange}
        ></textarea>
      </div>
    </div>
  );
}
