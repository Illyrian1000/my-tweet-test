import React, { useState } from "react";

import InputTweet from "./InputTweet";
import OutputTweet from "./OutputTweet";
import "./Tweet.css";
export default function Tweet() {
  const defaultImg = "src/assets/profile.png";

  const [profileImage, setProfileImage] = useState();

  const [profileUsername, setProfileUsername] = useState("Ilirjan Prevazi");

  const [profileHandle, setProfileHandle] = useState("prevazi");

  const [profileTweet, setProfileTweet] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum lectus lorem, semper rhoncus dolor venenatis quis."
  );

  function returnImage(e) {
    setProfileImage(e);
  }
  function returnUsername(e) {
    setProfileUsername(e);
  }

  function returnHandle(e) {
    setProfileHandle(e);
  }

  function returnTweet(e) {
    setProfileTweet(e);
  }

  return (
    <div className="tweet_cont">
      <InputTweet
        image={returnImage}
        username={returnUsername}
        handle={returnHandle}
        tweet={returnTweet}
      />
      <OutputTweet
        outputImage={profileImage}
        outputUsername={profileUsername}
        outputHandle={profileHandle}
        outputTweet={profileTweet}
      />
    </div>
  );
}
